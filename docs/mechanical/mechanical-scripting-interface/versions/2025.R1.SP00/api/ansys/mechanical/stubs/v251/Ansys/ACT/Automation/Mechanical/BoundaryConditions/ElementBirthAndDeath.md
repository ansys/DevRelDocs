# `ElementBirthAndDeath`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementBirthAndDeath.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementBirthAndDeath.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElementBirthAndDeath.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementBirthAndDeath.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementBirthAndDeath.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ElementBirthAndDeath.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementBirthAndDeath.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElementBirthAndDeath.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementBirthAndDeath.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ElementBirthAndDeath.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementBirthAndDeath.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementBirthAndDeath.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementBirthAndDeath.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ElementBirthAndDeath.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementBirthAndDeath.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementBirthAndDeath.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ElementBirthAndDeath.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElementBirthAndDeath.Comments)                               | Gets the list of associated comments.                         |
| [`CurrentStep`](#ElementBirthAndDeath.CurrentStep)                         | Gets or sets the CurrentStep.                                 |
| [`DataModelObjectCategory`](#ElementBirthAndDeath.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ElementBirthAndDeath.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ElementBirthAndDeath.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ElementBirthAndDeath.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ElementBirthAndDeath.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#ElementBirthAndDeath.Properties)                           | Gets the list of properties for this object.                  |
| [`Status`](#ElementBirthAndDeath.Status)                                   | Gets or sets the Status.                                      |
| [`Suppressed`](#ElementBirthAndDeath.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ElementBirthAndDeath.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementBirthAndDeath.Children"></a>

### *property* ElementBirthAndDeath.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Comments"></a>

### *property* ElementBirthAndDeath.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CurrentStep"></a>

### *property* ElementBirthAndDeath.CurrentStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.DataModelObjectCategory"></a>

### *property* ElementBirthAndDeath.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Figures"></a>

### *property* ElementBirthAndDeath.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Images"></a>

### *property* ElementBirthAndDeath.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.InternalObject"></a>

### *property* ElementBirthAndDeath.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Location"></a>

### *property* ElementBirthAndDeath.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Properties"></a>

### *property* ElementBirthAndDeath.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Status"></a>

### *property* ElementBirthAndDeath.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementControlsStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Suppressed"></a>

### *property* ElementBirthAndDeath.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.VisibleProperties"></a>

### *property* ElementBirthAndDeath.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementBirthAndDeath.Activate"></a>

### ElementBirthAndDeath.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddComment"></a>

### ElementBirthAndDeath.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddFigure"></a>

### ElementBirthAndDeath.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.AddImage"></a>

### ElementBirthAndDeath.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CopyTo"></a>

### ElementBirthAndDeath.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.CreateParameter"></a>

### ElementBirthAndDeath.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Delete"></a>

### ElementBirthAndDeath.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.Duplicate"></a>

### ElementBirthAndDeath.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetChildren"></a>

### ElementBirthAndDeath.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GetParameter"></a>

### ElementBirthAndDeath.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupAllSimilarChildren"></a>

### ElementBirthAndDeath.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.GroupSimilarObjects"></a>

### ElementBirthAndDeath.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByAPIName"></a>

### ElementBirthAndDeath.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.PropertyByName"></a>

### ElementBirthAndDeath.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementBirthAndDeath.RemoveParameter"></a>

### ElementBirthAndDeath.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

