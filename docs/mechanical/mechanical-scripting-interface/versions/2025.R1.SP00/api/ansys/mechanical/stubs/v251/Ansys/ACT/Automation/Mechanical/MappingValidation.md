# `MappingValidation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MappingValidation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MappingValidation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MappingValidation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MappingValidation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MappingValidation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MappingValidation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MappingValidation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MappingValidation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MappingValidation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MappingValidation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MappingValidation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MappingValidation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MappingValidation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MappingValidation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MappingValidation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MappingValidation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MappingValidation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MappingValidation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`ActiveSequence`](#MappingValidation.ActiveSequence)                   | Gets or sets the ActiveSequence.                                                           |
| [`ActiveSequenceByValue`](#MappingValidation.ActiveSequenceByValue)     | Gets or sets the ActiveSequenceByValue.                                                    |
| [`BoundingTolerance`](#MappingValidation.BoundingTolerance)             | Gets or sets the BoundingTolerance.                                                        |
| [`Children`](#MappingValidation.Children)                               | Gets the list of children.                                                                 |
| [`Comments`](#MappingValidation.Comments)                               | Gets the list of associated comments.                                                      |
| [`ComplexComponent`](#MappingValidation.ComplexComponent)               | Gets or sets the ComplexComponent.                                                         |
| [`Component`](#MappingValidation.Component)                             | Gets or sets the Component.                                                                |
| [`DataModelObjectCategory`](#MappingValidation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                               |
| [`DefineActiveSequenceBy`](#MappingValidation.DefineActiveSequenceBy)   | Control whether the active sequenced is defined by row or by value.                        |
| [`Display`](#MappingValidation.Display)                                 | Display property.                                                                          |
| [`DisplayDataType`](#MappingValidation.DisplayDataType)                 | Gets or sets the DisplayDataType.                                                          |
| [`Figures`](#MappingValidation.Figures)                                 | Gets the list of associated figures.                                                       |
| [`FileIdentifierIndex`](#MappingValidation.FileIdentifierIndex)         | Gets or sets the FileIdentifierIndex.                                                      |
| [`Images`](#MappingValidation.Images)                                   | Gets the list of associated images.                                                        |
| [`InternalObject`](#MappingValidation.InternalObject)                   | Gets the internal object. For advanced usage only.                                         |
| [`IsolineThickness`](#MappingValidation.IsolineThickness)               | IsolineThickness property.                                                                 |
| [`IsolineType`](#MappingValidation.IsolineType)                         | IsolineType property.                                                                      |
| [`Layer`](#MappingValidation.Layer)                                     | Gets or sets the Layer.                                                                    |
| [`LegendDivisions`](#MappingValidation.LegendDivisions)                 | LegendDivisions property.                                                                  |
| [`Properties`](#MappingValidation.Properties)                           | Gets the list of properties for this object.                                               |
| [`Scale`](#MappingValidation.Scale)                                     | Scale property.                                                                            |
| [`ShellFace`](#MappingValidation.ShellFace)                             | Controls whether the displayed shell face lies on the bottom, middle, or top of the shell. |
| [`Type`](#MappingValidation.Type)                                       | Type property.                                                                             |
| [`VisibleProperties`](#MappingValidation.VisibleProperties)             | Gets the list of properties that are visible for this object.                              |

<a id="property-detail"></a>

## Property detail

<a id="MappingValidation.ActiveSequence"></a>

### *property* MappingValidation.ActiveSequence *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequence.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ActiveSequenceByValue"></a>

### *property* MappingValidation.ActiveSequenceByValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequenceByValue.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.BoundingTolerance"></a>

### *property* MappingValidation.BoundingTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Children"></a>

### *property* MappingValidation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Comments"></a>

### *property* MappingValidation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ComplexComponent"></a>

### *property* MappingValidation.ComplexComponent *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplexComponent.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Component"></a>

### *property* MappingValidation.Component *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayComponentType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DataModelObjectCategory"></a>

### *property* MappingValidation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DefineActiveSequenceBy"></a>

### *property* MappingValidation.DefineActiveSequenceBy *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy](../../../Mechanical/DataModel/Enums/ExternalLoadDefineActiveSequenceBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Control whether the active sequenced is defined by row or by value.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Display"></a>

### *property* MappingValidation.Display *: [Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption](../../../Mechanical/DataModel/Enums/MappingValidationDisplayOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Display property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DisplayDataType"></a>

### *property* MappingValidation.DisplayDataType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayDataType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayDataType.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Figures"></a>

### *property* MappingValidation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.FileIdentifierIndex"></a>

### *property* MappingValidation.FileIdentifierIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileIdentifierIndex.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Images"></a>

### *property* MappingValidation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.InternalObject"></a>

### *property* MappingValidation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMappingValidationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineThickness"></a>

### *property* MappingValidation.IsolineThickness *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType](../../../Mechanical/DataModel/Enums/MappingIsolineThicknessType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineThickness property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineType"></a>

### *property* MappingValidation.IsolineType *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType](../../../Mechanical/DataModel/Enums/MappingIsolineLineType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineType property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Layer"></a>

### *property* MappingValidation.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.LegendDivisions"></a>

### *property* MappingValidation.LegendDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

LegendDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Properties"></a>

### *property* MappingValidation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Scale"></a>

### *property* MappingValidation.Scale *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Scale property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ShellFace"></a>

### *property* MappingValidation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether the displayed shell face lies on the bottom, middle, or top of the shell.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Type"></a>

### *property* MappingValidation.Type *: [Ansys.Mechanical.DataModel.Enums.MappingValidationType](../../../Mechanical/DataModel/Enums/MappingValidationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MappingValidationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.VisibleProperties"></a>

### *property* MappingValidation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MappingValidation.Activate"></a>

### MappingValidation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddComment"></a>

### MappingValidation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddFigure"></a>

### MappingValidation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.AddImage"></a>

### MappingValidation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CopyTo"></a>

### MappingValidation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CreateParameter"></a>

### MappingValidation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Delete"></a>

### MappingValidation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Duplicate"></a>

### MappingValidation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetChildren"></a>

### MappingValidation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetParameter"></a>

### MappingValidation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupAllSimilarChildren"></a>

### MappingValidation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupSimilarObjects"></a>

### MappingValidation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByAPIName"></a>

### MappingValidation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByName"></a>

### MappingValidation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.RemoveParameter"></a>

### MappingValidation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

