# `MeshWorkflowLabelGroup`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowLabelGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowLabelGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelLabelGroupAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowLabelGroup.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowLabelGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowLabelGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowLabelGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowLabelGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowLabelGroup.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowLabelGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowLabelGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowLabelGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowLabelGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowLabelGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowLabelGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowLabelGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowLabelGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshWorkflowLabelGroup.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#MeshWorkflowLabelGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshWorkflowLabelGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowLabelGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshWorkflowLabelGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowLabelGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowLabelGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowLabelGroup.Children"></a>

### *property* MeshWorkflowLabelGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowLabelGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.Figures"></a>

### *property* MeshWorkflowLabelGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.Images"></a>

### *property* MeshWorkflowLabelGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.InternalObject"></a>

### *property* MeshWorkflowLabelGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelLabelGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.Properties"></a>

### *property* MeshWorkflowLabelGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.VisibleProperties"></a>

### *property* MeshWorkflowLabelGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowLabelGroup.Activate"></a>

### MeshWorkflowLabelGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.AddFigure"></a>

### MeshWorkflowLabelGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.AddImage"></a>

### MeshWorkflowLabelGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.CopyTo"></a>

### MeshWorkflowLabelGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.CreateParameter"></a>

### MeshWorkflowLabelGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.Delete"></a>

### MeshWorkflowLabelGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.Duplicate"></a>

### MeshWorkflowLabelGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.GetChildren"></a>

### MeshWorkflowLabelGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.GetParameter"></a>

### MeshWorkflowLabelGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowLabelGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.GroupSimilarObjects"></a>

### MeshWorkflowLabelGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.PropertyByAPIName"></a>

### MeshWorkflowLabelGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.PropertyByName"></a>

### MeshWorkflowLabelGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowLabelGroup.RemoveParameter"></a>

### MeshWorkflowLabelGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

