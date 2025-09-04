# `GeometryFileContainer`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.GeometryFileContainer"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryFileContainer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryFileContainer.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeometryFileContainer.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GeometryFileContainer.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryFileContainer.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeometryFileContainer.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GeometryFileContainer.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GeometryFileContainer.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GeometryFileContainer.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GeometryFileContainer.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GeometryFileContainer.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GeometryFileContainer.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeometryFileContainer.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryFileContainer.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`ImportSTL`](#GeometryFileContainer.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`PropertyByAPIName`](#GeometryFileContainer.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeometryFileContainer.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeometryFileContainer.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GeometryFileContainer.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeometryFileContainer.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GeometryFileContainer.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GeometryFileContainer.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GeometryFileContainer.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryFileContainer.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LengthUnits`](#GeometryFileContainer.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`Properties`](#GeometryFileContainer.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GeometryFileContainer.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ShowAlways`](#GeometryFileContainer.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Statistics`](#GeometryFileContainer.Statistics)                           | Gets the Statistics.                                          |
| [`Suppressed`](#GeometryFileContainer.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GeometryFileContainer.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryFileContainer.Children"></a>

### *property* GeometryFileContainer.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Comments"></a>

### *property* GeometryFileContainer.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.DataModelObjectCategory"></a>

### *property* GeometryFileContainer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Figures"></a>

### *property* GeometryFileContainer.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Images"></a>

### *property* GeometryFileContainer.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.InternalObject"></a>

### *property* GeometryFileContainer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.LengthUnits"></a>

### *property* GeometryFileContainer.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Properties"></a>

### *property* GeometryFileContainer.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ReadOnly"></a>

### *property* GeometryFileContainer.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ShowAlways"></a>

### *property* GeometryFileContainer.ShowAlways *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Statistics"></a>

### *property* GeometryFileContainer.Statistics *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Suppressed"></a>

### *property* GeometryFileContainer.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.VisibleProperties"></a>

### *property* GeometryFileContainer.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryFileContainer.Activate"></a>

### GeometryFileContainer.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddComment"></a>

### GeometryFileContainer.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddFigure"></a>

### GeometryFileContainer.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.AddImage"></a>

### GeometryFileContainer.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CopyTo"></a>

### GeometryFileContainer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.CreateParameter"></a>

### GeometryFileContainer.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Delete"></a>

### GeometryFileContainer.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.Duplicate"></a>

### GeometryFileContainer.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetChildren"></a>

### GeometryFileContainer.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GetParameter"></a>

### GeometryFileContainer.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupAllSimilarChildren"></a>

### GeometryFileContainer.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.GroupSimilarObjects"></a>

### GeometryFileContainer.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.ImportSTL"></a>

### GeometryFileContainer.ImportSTL() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByAPIName"></a>

### GeometryFileContainer.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.PropertyByName"></a>

### GeometryFileContainer.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryFileContainer.RemoveParameter"></a>

### GeometryFileContainer.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

