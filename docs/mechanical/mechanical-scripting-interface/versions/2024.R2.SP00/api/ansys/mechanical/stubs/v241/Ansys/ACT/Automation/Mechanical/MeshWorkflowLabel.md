# `MeshWorkflowLabel`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowLabel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowLabel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelLabelAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowLabel.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowLabel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowLabel.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowLabel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowLabel.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowLabel.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowLabel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowLabel.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowLabel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowLabel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowLabel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowLabel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowLabel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowLabel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshWorkflowLabel.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#MeshWorkflowLabel.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshWorkflowLabel.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowLabel.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshWorkflowLabel.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowLabel.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowLabel.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowLabel.Children"></a>

### *property* MeshWorkflowLabel.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.DataModelObjectCategory"></a>

### *property* MeshWorkflowLabel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.Figures"></a>

### *property* MeshWorkflowLabel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.Images"></a>

### *property* MeshWorkflowLabel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.InternalObject"></a>

### *property* MeshWorkflowLabel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelLabelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.Properties"></a>

### *property* MeshWorkflowLabel.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.VisibleProperties"></a>

### *property* MeshWorkflowLabel.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowLabel.Activate"></a>

### MeshWorkflowLabel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.AddFigure"></a>

### MeshWorkflowLabel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.AddImage"></a>

### MeshWorkflowLabel.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.CopyTo"></a>

### MeshWorkflowLabel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.CreateParameter"></a>

### MeshWorkflowLabel.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.Delete"></a>

### MeshWorkflowLabel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.Duplicate"></a>

### MeshWorkflowLabel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.GetChildren"></a>

### MeshWorkflowLabel.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.GetParameter"></a>

### MeshWorkflowLabel.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.GroupAllSimilarChildren"></a>

### MeshWorkflowLabel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.GroupSimilarObjects"></a>

### MeshWorkflowLabel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.PropertyByAPIName"></a>

### MeshWorkflowLabel.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.PropertyByName"></a>

### MeshWorkflowLabel.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabel.RemoveParameter"></a>

### MeshWorkflowLabel.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

