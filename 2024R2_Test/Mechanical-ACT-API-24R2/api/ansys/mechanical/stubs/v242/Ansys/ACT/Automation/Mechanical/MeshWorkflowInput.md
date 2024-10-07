# `MeshWorkflowInput`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshWorkflowInput"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowInput

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelGeometryDomainAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowInput.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowInput.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowInput.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowInput.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowInput.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowInput.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowInput.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowInput.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowInput.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowInput.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowInput.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowInput.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowInput.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowInput.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshWorkflowInput.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#MeshWorkflowInput.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshWorkflowInput.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowInput.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshWorkflowInput.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MeshWorkflowInput.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#MeshWorkflowInput.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowInput.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowInput.Children"></a>

### *property* MeshWorkflowInput.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.DataModelObjectCategory"></a>

### *property* MeshWorkflowInput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Figures"></a>

### *property* MeshWorkflowInput.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Images"></a>

### *property* MeshWorkflowInput.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InternalObject"></a>

### *property* MeshWorkflowInput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelGeometryDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Location"></a>

### *property* MeshWorkflowInput.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Properties"></a>

### *property* MeshWorkflowInput.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.VisibleProperties"></a>

### *property* MeshWorkflowInput.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowInput.Activate"></a>

### MeshWorkflowInput.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddFigure"></a>

### MeshWorkflowInput.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddImage"></a>

### MeshWorkflowInput.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CopyTo"></a>

### MeshWorkflowInput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CreateParameter"></a>

### MeshWorkflowInput.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Delete"></a>

### MeshWorkflowInput.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Duplicate"></a>

### MeshWorkflowInput.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetChildren"></a>

### MeshWorkflowInput.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetParameter"></a>

### MeshWorkflowInput.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupAllSimilarChildren"></a>

### MeshWorkflowInput.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupSimilarObjects"></a>

### MeshWorkflowInput.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByAPIName"></a>

### MeshWorkflowInput.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByName"></a>

### MeshWorkflowInput.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.RemoveParameter"></a>

### MeshWorkflowInput.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

