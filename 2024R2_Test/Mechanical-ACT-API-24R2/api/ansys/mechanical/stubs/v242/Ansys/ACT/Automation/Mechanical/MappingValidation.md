# `MappingValidation`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MappingValidation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MappingValidation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|--------------------------------------------------------------------------------------------|
| `Type`                    | Type property.                                                                             |
| `Display`                 | Display property.                                                                          |
| `LegendDivisions`         | LegendDivisions property.                                                                  |
| `IsolineThickness`        | IsolineThickness property.                                                                 |
| `IsolineType`             | IsolineType property.                                                                      |
| `Scale`                   | Scale property.                                                                            |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                         |
| `ActiveSequence`          | Gets or sets the ActiveSequence.                                                           |
| `ActiveSequenceByValue`   | Gets or sets the ActiveSequenceByValue.                                                    |
| `BoundingTolerance`       | Gets or sets the BoundingTolerance.                                                        |
| `FileIdentifierIndex`     | Gets or sets the FileIdentifierIndex.                                                      |
| `Layer`                   | Gets or sets the Layer.                                                                    |
| `DefineActiveSequenceBy`  | Control whether the active sequenced is defined by row or by value.                        |
| `Component`               | Gets or sets the Component.                                                                |
| `DisplayDataType`         | Gets or sets the DisplayDataType.                                                          |
| `ShellFace`               | Controls whether the displayed shell face lies on the bottom, middle, or top of the shell. |
| `ComplexComponent`        | Gets or sets the ComplexComponent.                                                         |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                               |
| `Children`                | Gets the list of children.                                                                 |
| `Comments`                | Gets the list of associated comments.                                                      |
| `Figures`                 | Gets the list of associated figures.                                                       |
| `Images`                  | Gets the list of associated images.                                                        |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                         |
| `Properties`              | Gets the list of properties for this object.                                               |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                              |

<a id="property-detail"></a>

## Property detail

### *property* MappingValidation.Type *: [Ansys.Mechanical.DataModel.Enums.MappingValidationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingValidationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingValidationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Display *: [Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingValidationDisplayOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingValidationDisplayOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Display property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.LegendDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

LegendDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.IsolineThickness *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingIsolineThicknessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingIsolineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

IsolineThickness property.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.IsolineType *: [Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/MappingIsolineLineType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MappingIsolineLineType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* MappingValidation.DefineActiveSequenceBy *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadDefineActiveSequenceBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDefineActiveSequenceBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Control whether the active sequenced is defined by row or by value.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Component *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadDisplayComponentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.DisplayDataType *: [Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExternalLoadDisplayDataType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExternalLoadDisplayDataType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayDataType.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether the displayed shell face lies on the bottom, middle, or top of the shell.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.ComplexComponent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplexComponent.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MappingValidation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### MappingValidation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MappingValidation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MappingValidation.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

