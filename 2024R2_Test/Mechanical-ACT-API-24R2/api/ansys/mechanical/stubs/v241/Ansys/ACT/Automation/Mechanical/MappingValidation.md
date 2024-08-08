# `MappingValidation`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MappingValidation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MappingValidation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`Type`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Type)                                       | Type property.                                                                             |
| [`Display`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Display)                                 | Display property.                                                                          |
| [`LegendDivisions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.LegendDivisions)                 | LegendDivisions property.                                                                  |
| [`IsolineThickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.IsolineThickness)               | IsolineThickness property.                                                                 |
| [`IsolineType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.IsolineType)                         | IsolineType property.                                                                      |
| [`Scale`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Scale)                                     | Scale property.                                                                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#id0)                                                | Gets the internal object. For advanced usage only.                                         |
| [`ActiveSequence`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.ActiveSequence)                   | Gets or sets the ActiveSequence.                                                           |
| [`ActiveSequenceByValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.ActiveSequenceByValue)     | Gets or sets the ActiveSequenceByValue.                                                    |
| [`BoundingTolerance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.BoundingTolerance)             | Gets or sets the BoundingTolerance.                                                        |
| [`FileIdentifierIndex`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.FileIdentifierIndex)         | Gets or sets the FileIdentifierIndex.                                                      |
| [`Layer`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Layer)                                     | Gets or sets the Layer.                                                                    |
| [`DefineActiveSequenceBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.DefineActiveSequenceBy)   | Control whether the active sequenced is defined by row or by value.                        |
| [`Component`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Component)                             | Gets or sets the Component.                                                                |
| [`DisplayDataType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.DisplayDataType)                 | Gets or sets the DisplayDataType.                                                          |
| [`ShellFace`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.ShellFace)                             | Controls whether the displayed shell face lies on the bottom, middle, or top of the shell. |
| [`ComplexComponent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.ComplexComponent)               | Gets or sets the ComplexComponent.                                                         |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                                               |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Children)                               | Gets the list of children.                                                                 |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Comments)                               | Gets the list of associated comments.                                                      |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Figures)                                 | Gets the list of associated figures.                                                       |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Images)                                   | Gets the list of associated images.                                                        |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#id0)                                                | Gets the internal object. For advanced usage only.                                         |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.Properties)                           | Gets the list of properties for this object.                                               |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MappingValidation.md#MappingValidation.VisibleProperties)             | Gets the list of properties that are visible for this object.                              |

<a id="property-detail"></a>

## Property detail

<a id="MappingValidation.Type"></a>

### *property* MappingValidation.Type *: [Ansys.Mechanical.DataModel.Enums.MappingValidationType](../../../Mechanical/DataModel/Enums/MappingValidationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingValidationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Display"></a>

### *property* MappingValidation.Display *: [Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption](../../../Mechanical/DataModel/Enums/MappingValidationDisplayOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Display property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.LegendDivisions"></a>

### *property* MappingValidation.LegendDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

LegendDivisions property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineThickness"></a>

### *property* MappingValidation.IsolineThickness *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType](../../../Mechanical/DataModel/Enums/MappingIsolineThicknessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineThickness property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.IsolineType"></a>

### *property* MappingValidation.IsolineType *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType](../../../Mechanical/DataModel/Enums/MappingIsolineLineType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineType property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Scale"></a>

### *property* MappingValidation.Scale *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Scale property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.InternalObject"></a>

### *property* MappingValidation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMappingValidationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ActiveSequence"></a>

### *property* MappingValidation.ActiveSequence *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequence.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ActiveSequenceByValue"></a>

### *property* MappingValidation.ActiveSequenceByValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveSequenceByValue.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.BoundingTolerance"></a>

### *property* MappingValidation.BoundingTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundingTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.FileIdentifierIndex"></a>

### *property* MappingValidation.FileIdentifierIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileIdentifierIndex.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Layer"></a>

### *property* MappingValidation.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DefineActiveSequenceBy"></a>

### *property* MappingValidation.DefineActiveSequenceBy *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy](../../../Mechanical/DataModel/Enums/ExternalLoadDefineActiveSequenceBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Control whether the active sequenced is defined by row or by value.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Component"></a>

### *property* MappingValidation.Component *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayComponentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DisplayDataType"></a>

### *property* MappingValidation.DisplayDataType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType](../../../Mechanical/DataModel/Enums/ExternalLoadDisplayDataType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayDataType.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ShellFace"></a>

### *property* MappingValidation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether the displayed shell face lies on the bottom, middle, or top of the shell.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.ComplexComponent"></a>

### *property* MappingValidation.ComplexComponent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplexComponent.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.DataModelObjectCategory"></a>

### *property* MappingValidation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Children"></a>

### *property* MappingValidation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Comments"></a>

### *property* MappingValidation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Figures"></a>

### *property* MappingValidation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Images"></a>

### *property* MappingValidation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MappingValidation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Properties"></a>

### *property* MappingValidation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.VisibleProperties"></a>

### *property* MappingValidation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MappingValidation.Delete"></a>

### MappingValidation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetChildren"></a>

### MappingValidation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MappingValidation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### MappingValidation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Activate"></a>

### MappingValidation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CopyTo"></a>

### MappingValidation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.Duplicate"></a>

### MappingValidation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupAllSimilarChildren"></a>

### MappingValidation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GroupSimilarObjects"></a>

### MappingValidation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByName"></a>

### MappingValidation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.PropertyByAPIName"></a>

### MappingValidation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.CreateParameter"></a>

### MappingValidation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.GetParameter"></a>

### MappingValidation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MappingValidation.RemoveParameter"></a>

### MappingValidation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

