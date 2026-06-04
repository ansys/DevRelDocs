# `AcousticAbsorptionElement`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticAbsorptionElement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticAbsorptionElement.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticAbsorptionElement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticAbsorptionElement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticAbsorptionElement.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticAbsorptionElement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticAbsorptionElement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticAbsorptionElement.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticAbsorptionElement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticAbsorptionElement.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticAbsorptionElement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionElement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticAbsorptionElement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticAbsorptionElement.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticAbsorptionElement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticAbsorptionElement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticAbsorptionElement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticAbsorptionElement.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticAbsorptionElement.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticAbsorptionElement.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticAbsorptionElement.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticAbsorptionElement.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticAbsorptionElement.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticAbsorptionElement.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#AcousticAbsorptionElement.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticAbsorptionElement.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticAbsorptionElement.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticAbsorptionElement.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticAbsorptionElement.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionElement.Children"></a>

### *property* AcousticAbsorptionElement.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Comments"></a>

### *property* AcousticAbsorptionElement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionElement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Figures"></a>

### *property* AcousticAbsorptionElement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Images"></a>

### *property* AcousticAbsorptionElement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.InternalObject"></a>

### *property* AcousticAbsorptionElement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Location"></a>

### *property* AcousticAbsorptionElement.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Properties"></a>

### *property* AcousticAbsorptionElement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ReadOnly"></a>

### *property* AcousticAbsorptionElement.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.SharedRefBody"></a>

### *property* AcousticAbsorptionElement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Suppressed"></a>

### *property* AcousticAbsorptionElement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.VisibleProperties"></a>

### *property* AcousticAbsorptionElement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionElement.Activate"></a>

### AcousticAbsorptionElement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddComment"></a>

### AcousticAbsorptionElement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddFigure"></a>

### AcousticAbsorptionElement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddImage"></a>

### AcousticAbsorptionElement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CopyTo"></a>

### AcousticAbsorptionElement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CreateParameter"></a>

### AcousticAbsorptionElement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Delete"></a>

### AcousticAbsorptionElement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Duplicate"></a>

### AcousticAbsorptionElement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetChildren"></a>

### AcousticAbsorptionElement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetParameter"></a>

### AcousticAbsorptionElement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupAllSimilarChildren"></a>

### AcousticAbsorptionElement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupSimilarObjects"></a>

### AcousticAbsorptionElement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PromoteToNamedSelection"></a>

### AcousticAbsorptionElement.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByAPIName"></a>

### AcousticAbsorptionElement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByName"></a>

### AcousticAbsorptionElement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.RemoveParameter"></a>

### AcousticAbsorptionElement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

