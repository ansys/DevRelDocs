# MappingValidation

### *class* MappingValidation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MappingValidation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#MappingValidation.Delete)                                   | Run the Delete action.                                                            |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MappingValidation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MappingValidation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MappingValidation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MappingValidation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MappingValidation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MappingValidation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MappingValidation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MappingValidation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MappingValidation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MappingValidation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MappingValidation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MappingValidation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MappingValidation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Type`](#MappingValidation.Type)                                                                                   | Type property.                                                                             |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`Display`](#MappingValidation.Display)                                                                             | Display property.                                                                          |
| [`LegendDivisions`](#MappingValidation.LegendDivisions)                                                             | LegendDivisions property.                                                                  |
| [`IsolineThickness`](#MappingValidation.IsolineThickness)                                                           | IsolineThickness property.                                                                 |
| [`IsolineType`](#MappingValidation.IsolineType)                                                                     | IsolineType property.                                                                      |
| [`Scale`](#MappingValidation.Scale)                                                                                 | Scale property.                                                                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                         |
| [`ActiveSequence`](#MappingValidation.ActiveSequence)                                                               | Gets or sets the ActiveSequence.                                                           |
| [`ActiveSequenceByValue`](#MappingValidation.ActiveSequenceByValue)                                                 | Gets or sets the ActiveSequenceByValue.                                                    |
| [`BoundingTolerance`](#MappingValidation.BoundingTolerance)                                                         | Gets or sets the BoundingTolerance.                                                        |
| [`FileIdentifierIndex`](#MappingValidation.FileIdentifierIndex)                                                     | Gets or sets the FileIdentifierIndex.                                                      |
| [`Layer`](#MappingValidation.Layer)                                                                                 | Gets or sets the Layer.                                                                    |
| [`DefineActiveSequenceBy`](#MappingValidation.DefineActiveSequenceBy)                                               | Control whether the active sequenced is defined by row or by value.                        |
| [`Component`](#MappingValidation.Component)                                                                         | Gets or sets the Component.                                                                |
| [`DisplayDataType`](#MappingValidation.DisplayDataType)                                                             | Gets or sets the DisplayDataType.                                                          |
| [`ShellFace`](#MappingValidation.ShellFace)                                                                         | Controls whether the displayed shell face lies on the bottom, middle, or top of the shell. |
| [`ComplexComponent`](#MappingValidation.ComplexComponent)                                                           | Gets or sets the ComplexComponent.                                                         |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                               |
| [`Children`](#MappingValidation.Children)                                                                           | Gets the list of children.                                                                 |
| [`Comments`](#MappingValidation.Comments)                                                                           | Gets the list of associated comments.                                                      |
| [`Figures`](#MappingValidation.Figures)                                                                             | Gets the list of associated figures.                                                       |
| [`Images`](#MappingValidation.Images)                                                                               | Gets the list of associated images.                                                        |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                         |
| [`Properties`](#MappingValidation.Properties)                                                                       | Gets the list of properties for this object.                                               |
| [`VisibleProperties`](#MappingValidation.VisibleProperties)                                                         | Gets the list of properties that are visible for this object.                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MappingValidation
```

## Property detail

### *property* MappingValidation.Type *: [Ansys.Mechanical.DataModel.Enums.MappingValidationType](../../../Mechanical/DataModel/Enums/MappingValidationType.md#MappingValidationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Display *: [Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption](../../../Mechanical/DataModel/Enums/MappingValidationDisplayOption.md#MappingValidationDisplayOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Display property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.LegendDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

LegendDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.IsolineThickness *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType](../../../Mechanical/DataModel/Enums/MappingIsolineThicknessType.md#MappingIsolineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineThickness property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.IsolineType *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType](../../../Mechanical/DataModel/Enums/MappingIsolineLineType.md#MappingIsolineLineType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineType property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Scale *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Scale property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMappingValidationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ActiveSequence *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequence.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ActiveSequenceByValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequenceByValue.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.BoundingTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundingTolerance.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.FileIdentifierIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileIdentifierIndex.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.DefineActiveSequenceBy *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy](../../../Mechanical/DataModel/Enums/ExternalLoadDefineActiveSequenceBy.md#ExternalLoadDefineActiveSequenceBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Control whether the active sequenced is defined by row or by value.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Component *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayComponentType.md#ExternalLoadDisplayComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.DisplayDataType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayDataType.md#ExternalLoadDisplayDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayDataType.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether the displayed shell face lies on the bottom, middle, or top of the shell.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ComplexComponent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplexComponent.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MappingValidation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MappingValidation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MappingValidation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MappingValidation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MappingValidation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MappingValidation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MappingValidation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MappingValidation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
