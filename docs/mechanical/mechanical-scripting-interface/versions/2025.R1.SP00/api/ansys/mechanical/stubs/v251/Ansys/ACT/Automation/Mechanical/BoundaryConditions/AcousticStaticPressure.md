# `AcousticStaticPressure`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticStaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticStaticPressure.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticStaticPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticStaticPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticStaticPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticStaticPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticStaticPressure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticStaticPressure.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticStaticPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticStaticPressure.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticStaticPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticStaticPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticStaticPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticStaticPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticStaticPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticStaticPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticStaticPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticStaticPressure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticStaticPressure.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticStaticPressure.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticStaticPressure.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticStaticPressure.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AcousticStaticPressure.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticStaticPressure.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#AcousticStaticPressure.Magnitude)                             | Gets or sets the Magnitude.                                   |
| [`Properties`](#AcousticStaticPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticStaticPressure.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticStaticPressure.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticStaticPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticStaticPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticStaticPressure.Children"></a>

### *property* AcousticStaticPressure.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Comments"></a>

### *property* AcousticStaticPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.DataModelObjectCategory"></a>

### *property* AcousticStaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Figures"></a>

### *property* AcousticStaticPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Images"></a>

### *property* AcousticStaticPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.InternalObject"></a>

### *property* AcousticStaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Location"></a>

### *property* AcousticStaticPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Magnitude"></a>

### *property* AcousticStaticPressure.Magnitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Properties"></a>

### *property* AcousticStaticPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ReadOnly"></a>

### *property* AcousticStaticPressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.SharedRefBody"></a>

### *property* AcousticStaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Suppressed"></a>

### *property* AcousticStaticPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.VisibleProperties"></a>

### *property* AcousticStaticPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticStaticPressure.Activate"></a>

### AcousticStaticPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddComment"></a>

### AcousticStaticPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddFigure"></a>

### AcousticStaticPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddImage"></a>

### AcousticStaticPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CopyTo"></a>

### AcousticStaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CreateParameter"></a>

### AcousticStaticPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Delete"></a>

### AcousticStaticPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Duplicate"></a>

### AcousticStaticPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetChildren"></a>

### AcousticStaticPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetParameter"></a>

### AcousticStaticPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupAllSimilarChildren"></a>

### AcousticStaticPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupSimilarObjects"></a>

### AcousticStaticPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PromoteToNamedSelection"></a>

### AcousticStaticPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByAPIName"></a>

### AcousticStaticPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByName"></a>

### AcousticStaticPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.RemoveParameter"></a>

### AcousticStaticPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

