# `AMSupportGroup`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMSupportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AMSupportGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AMSupportGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMSupportGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddGeneratedAMSupport`](#AMSupportGroup.AddGeneratedAMSupport)     | Creates a new GeneratedAMSupport                                                  |
| [`AddImage`](#AMSupportGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`AddPredefinedAMSupport`](#AMSupportGroup.AddPredefinedAMSupport)   | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#AMSupportGroup.AddSTLAMSupport)                 | Creates a new GeneratedAMSupport                                                  |
| [`CopyTo`](#AMSupportGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AMSupportGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AMSupportGroup.Delete)                                   | Run the Delete action.                                                            |
| [`DetectSupportFaces`](#AMSupportGroup.DetectSupportFaces)           | Runs the Detect Support Faces action.                                             |
| [`Duplicate`](#AMSupportGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AMSupportGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AMSupportGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AMSupportGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMSupportGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AMSupportGroup.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AMSupportGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AMSupportGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AMSupportGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AMSupportGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AMSupportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AMSupportGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DetectAboveZLocation`](#AMSupportGroup.DetectAboveZLocation)       | Gets or sets the DetectAboveZLocation.                        |
| [`Figures`](#AMSupportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`GenerateOnRemesh`](#AMSupportGroup.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`HangAngle`](#AMSupportGroup.HangAngle)                             | Gets or sets the HangAngle.                                   |
| [`Images`](#AMSupportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#AMSupportGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#AMSupportGroup.Location)                               | Gets or sets the Location.                                    |
| [`OutputType`](#AMSupportGroup.OutputType)                           | Gets or sets the OutputType.                                  |
| [`Properties`](#AMSupportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMSupportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMSupportGroup.Children"></a>

### *property* AMSupportGroup.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Comments"></a>

### *property* AMSupportGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DataModelObjectCategory"></a>

### *property* AMSupportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DetectAboveZLocation"></a>

### *property* AMSupportGroup.DetectAboveZLocation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectAboveZLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Figures"></a>

### *property* AMSupportGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GenerateOnRemesh"></a>

### *property* AMSupportGroup.GenerateOnRemesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.HangAngle"></a>

### *property* AMSupportGroup.HangAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Images"></a>

### *property* AMSupportGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.InternalObject"></a>

### *property* AMSupportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Location"></a>

### *property* AMSupportGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.OutputType"></a>

### *property* AMSupportGroup.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Properties"></a>

### *property* AMSupportGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.VisibleProperties"></a>

### *property* AMSupportGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupportGroup.Activate"></a>

### AMSupportGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddComment"></a>

### AMSupportGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddFigure"></a>

### AMSupportGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddGeneratedAMSupport"></a>

### AMSupportGroup.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddImage"></a>

### AMSupportGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddPredefinedAMSupport"></a>

### AMSupportGroup.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddSTLAMSupport"></a>

### AMSupportGroup.AddSTLAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CopyTo"></a>

### AMSupportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CreateParameter"></a>

### AMSupportGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Delete"></a>

### AMSupportGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DetectSupportFaces"></a>

### AMSupportGroup.DetectSupportFaces()

Runs the Detect Support Faces action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Duplicate"></a>

### AMSupportGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetChildren"></a>

### AMSupportGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetParameter"></a>

### AMSupportGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupAllSimilarChildren"></a>

### AMSupportGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupSimilarObjects"></a>

### AMSupportGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PromoteToNamedSelection"></a>

### AMSupportGroup.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByAPIName"></a>

### AMSupportGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByName"></a>

### AMSupportGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.RemoveParameter"></a>

### AMSupportGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

