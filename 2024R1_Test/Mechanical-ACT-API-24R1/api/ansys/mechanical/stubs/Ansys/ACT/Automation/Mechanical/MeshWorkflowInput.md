# MeshWorkflowInput

<a id="MeshWorkflowInput"></a>

### *class* MeshWorkflowInput

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Object that wraps IDSEngineeringModelGeometryDomainAuto.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#MeshWorkflowInput.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](#MeshWorkflowInput.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowInput.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshWorkflowInput.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshWorkflowInput.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshWorkflowInput.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowInput.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowInput.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshWorkflowInput.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshWorkflowInput.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshWorkflowInput.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshWorkflowInput.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshWorkflowInput.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Location`](#MeshWorkflowInput.Location)                                                                           | Gets or sets the Location.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowInput.Children)                                                                           | Gets the list of children.                                    |
| [`Figures`](#MeshWorkflowInput.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowInput.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowInput.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowInput.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowInput
```

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowInput.Location"></a>

### *property* MeshWorkflowInput.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InternalObject"></a>

### *property* MeshWorkflowInput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelGeometryDomainAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.DataModelObjectCategory"></a>

### *property* MeshWorkflowInput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Children"></a>

### *property* MeshWorkflowInput.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Figures"></a>

### *property* MeshWorkflowInput.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Images"></a>

### *property* MeshWorkflowInput.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowInput.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

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

<a id="MeshWorkflowInput.Delete"></a>

### MeshWorkflowInput.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetChildren"></a>

### MeshWorkflowInput.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowInput.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddFigure"></a>

### MeshWorkflowInput.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddImage"></a>

### MeshWorkflowInput.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Activate"></a>

### MeshWorkflowInput.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CopyTo"></a>

### MeshWorkflowInput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Duplicate"></a>

### MeshWorkflowInput.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupAllSimilarChildren"></a>

### MeshWorkflowInput.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupSimilarObjects"></a>

### MeshWorkflowInput.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByName"></a>

### MeshWorkflowInput.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByAPIName"></a>

### MeshWorkflowInput.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CreateParameter"></a>

### MeshWorkflowInput.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetParameter"></a>

### MeshWorkflowInput.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.RemoveParameter"></a>

### MeshWorkflowInput.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
