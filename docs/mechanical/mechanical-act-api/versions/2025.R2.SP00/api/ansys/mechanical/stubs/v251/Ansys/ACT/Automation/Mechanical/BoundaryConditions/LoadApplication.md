# `LoadApplication`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LoadApplication.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#LoadApplication.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#LoadApplication.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#LoadApplication.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#LoadApplication.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#LoadApplication.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#LoadApplication.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#LoadApplication.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#LoadApplication.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#LoadApplication.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#LoadApplication.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#LoadApplication.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LoadApplication.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#LoadApplication.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#LoadApplication.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#LoadApplication.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#LoadApplication.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#LoadApplication.Children)                               | Gets the list of children.                                    |
| [`Comments`](#LoadApplication.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LoadApplication.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#LoadApplication.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#LoadApplication.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#LoadApplication.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#LoadApplication.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#LoadApplication.LoadVectorAssignment)       | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#LoadApplication.LoadVectorNumber)               | Gets or sets the LoadVectorNumber.                            |
| [`Magnitude`](#LoadApplication.Magnitude)                             | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#LoadApplication.MagnitudeImag)                     | Gets the MagnitudeImag.                                       |
| [`Properties`](#LoadApplication.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#LoadApplication.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#LoadApplication.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Source`](#LoadApplication.Source)                                   | Gets or sets the Source.                                      |
| [`StepSelection`](#LoadApplication.StepSelection)                     | Gets or sets the StepSelection.                               |
| [`StepVarying`](#LoadApplication.StepVarying)                         | Gets or sets the StepVarying.                                 |
| [`Suppressed`](#LoadApplication.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#LoadApplication.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#LoadApplication.XComponent)                           | Gets the XComponent.                                          |
| [`XComponentImag`](#LoadApplication.XComponentImag)                   | Gets the XComponentImag.                                      |
| [`YComponent`](#LoadApplication.YComponent)                           | Gets the YComponent.                                          |
| [`YComponentImag`](#LoadApplication.YComponentImag)                   | Gets or sets the YComponentImag.                              |
| [`ZComponent`](#LoadApplication.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZComponentImag`](#LoadApplication.ZComponentImag)                   | Gets or sets the ZComponentImag.                              |

<a id="property-detail"></a>

## Property detail

<a id="LoadApplication.Children"></a>

### *property* LoadApplication.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Comments"></a>

### *property* LoadApplication.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.DataModelObjectCategory"></a>

### *property* LoadApplication.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Figures"></a>

### *property* LoadApplication.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Images"></a>

### *property* LoadApplication.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.IndependentVariable"></a>

### *property* LoadApplication.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.InternalObject"></a>

### *property* LoadApplication.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.LoadVectorAssignment"></a>

### *property* LoadApplication.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.LoadVectorNumber"></a>

### *property* LoadApplication.LoadVectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Magnitude"></a>

### *property* LoadApplication.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.MagnitudeImag"></a>

### *property* LoadApplication.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Properties"></a>

### *property* LoadApplication.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ReadOnly"></a>

### *property* LoadApplication.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.SharedRefBody"></a>

### *property* LoadApplication.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Source"></a>

### *property* LoadApplication.Source *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Source.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.StepSelection"></a>

### *property* LoadApplication.StepSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.StepVarying"></a>

### *property* LoadApplication.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Suppressed"></a>

### *property* LoadApplication.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.VisibleProperties"></a>

### *property* LoadApplication.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.XComponent"></a>

### *property* LoadApplication.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.XComponentImag"></a>

### *property* LoadApplication.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.YComponent"></a>

### *property* LoadApplication.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.YComponentImag"></a>

### *property* LoadApplication.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ZComponent"></a>

### *property* LoadApplication.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.ZComponentImag"></a>

### *property* LoadApplication.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LoadApplication.Activate"></a>

### LoadApplication.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddComment"></a>

### LoadApplication.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddFigure"></a>

### LoadApplication.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.AddImage"></a>

### LoadApplication.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.CopyTo"></a>

### LoadApplication.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.CreateParameter"></a>

### LoadApplication.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Delete"></a>

### LoadApplication.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.Duplicate"></a>

### LoadApplication.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetChildren"></a>

### LoadApplication.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GetParameter"></a>

### LoadApplication.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GroupAllSimilarChildren"></a>

### LoadApplication.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.GroupSimilarObjects"></a>

### LoadApplication.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PromoteToNamedSelection"></a>

### LoadApplication.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PropertyByAPIName"></a>

### LoadApplication.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.PropertyByName"></a>

### LoadApplication.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LoadApplication.RemoveParameter"></a>

### LoadApplication.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

