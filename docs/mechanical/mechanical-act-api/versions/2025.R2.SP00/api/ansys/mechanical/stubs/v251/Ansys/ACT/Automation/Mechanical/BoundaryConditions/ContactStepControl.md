# `ContactStepControl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactStepControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactStepControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactStepControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactStepControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactStepControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ContactStepControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactStepControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactStepControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactStepControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ContactStepControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactStepControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactStepControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactStepControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactStepControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactStepControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactStepControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactStepControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactStepControl.Comments)                               | Gets the list of associated comments.                         |
| [`ContactSelection`](#ContactStepControl.ContactSelection)               | Gets or sets the ContactSelection.                            |
| [`CurrentStep`](#ContactStepControl.CurrentStep)                         | Gets or sets the CurrentStep.                                 |
| [`DataModelObjectCategory`](#ContactStepControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ContactStepControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ContactStepControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactStepControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`NormalStiffness`](#ContactStepControl.NormalStiffness)                 | Gets or sets the NormalStiffness.                             |
| [`NormalStiffnessFactor`](#ContactStepControl.NormalStiffnessFactor)     | Gets or sets the NormalStiffnessFactor.                       |
| [`NormalStiffnessValue`](#ContactStepControl.NormalStiffnessValue)       | Gets or sets the NormalStiffnessValue.                        |
| [`Properties`](#ContactStepControl.Properties)                           | Gets the list of properties for this object.                  |
| [`Status`](#ContactStepControl.Status)                                   | Gets or sets the Status.                                      |
| [`Suppressed`](#ContactStepControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ContactStepControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactStepControl.Children"></a>

### *property* ContactStepControl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Comments"></a>

### *property* ContactStepControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.ContactSelection"></a>

### *property* ContactStepControl.ContactSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CurrentStep"></a>

### *property* ContactStepControl.CurrentStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.DataModelObjectCategory"></a>

### *property* ContactStepControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Figures"></a>

### *property* ContactStepControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Images"></a>

### *property* ContactStepControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.InternalObject"></a>

### *property* ContactStepControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffness"></a>

### *property* ContactStepControl.NormalStiffness *: [Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType](../../../../Mechanical/DataModel/Enums/ElementControlsNormalStiffnessType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementControlsNormalStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffnessFactor"></a>

### *property* ContactStepControl.NormalStiffnessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.NormalStiffnessValue"></a>

### *property* ContactStepControl.NormalStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Properties"></a>

### *property* ContactStepControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Status"></a>

### *property* ContactStepControl.Status *: [Ansys.Mechanical.DataModel.Enums.ElementControlsStatus](../../../../Mechanical/DataModel/Enums/ElementControlsStatus.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementControlsStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Status.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Suppressed"></a>

### *property* ContactStepControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.VisibleProperties"></a>

### *property* ContactStepControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactStepControl.Activate"></a>

### ContactStepControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddComment"></a>

### ContactStepControl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddFigure"></a>

### ContactStepControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.AddImage"></a>

### ContactStepControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CopyTo"></a>

### ContactStepControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.CreateParameter"></a>

### ContactStepControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Delete"></a>

### ContactStepControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.Duplicate"></a>

### ContactStepControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetChildren"></a>

### ContactStepControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GetParameter"></a>

### ContactStepControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GroupAllSimilarChildren"></a>

### ContactStepControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.GroupSimilarObjects"></a>

### ContactStepControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.PropertyByAPIName"></a>

### ContactStepControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.PropertyByName"></a>

### ContactStepControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactStepControl.RemoveParameter"></a>

### ContactStepControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

