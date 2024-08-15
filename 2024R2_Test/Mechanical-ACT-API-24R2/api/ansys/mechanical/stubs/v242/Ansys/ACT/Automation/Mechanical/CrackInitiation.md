# `CrackInitiation`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CrackInitiation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CrackInitiation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddCommandSnippet`       | Creates a new CommandSnippet                                                      |
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
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `SolutionContours`        | Gets or sets the SolutionContours.                            |
| `BottomFaceNodes`         | Gets or sets the BottomFaceNodes.                             |
| `TopFaceNodes`            | Gets or sets the TopFaceNodes.                                |
| `CenterXCoordinate`       | Gets or sets the CenterXCoordinate.                           |
| `CenterYCoordinate`       | Gets or sets the CenterYCoordinate.                           |
| `CenterZCoordinate`       | Gets or sets the CenterZCoordinate.                           |
| `MajorRadius`             | Gets or sets the MajorRadius.                                 |
| `MinorRadius`             | Gets or sets the MinorRadius.                                 |
| `CriterionValue`          | Gets or sets the CriterionValue.                              |
| `CrackShape`              | Gets or sets the CrackShape.                                  |
| `CrackOrientation`        | Gets or sets the CrackOrientation.                            |
| `CrackSourceType`         | Gets the CrackSourceType.                                     |
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `CrackCenter`             | Gets or sets the CrackCenter.                                 |
| `InitiationCriterion`     | Gets the InitiationCriterion.                                 |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `NamedSelection`          | Gets or sets the NamedSelection.                              |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                            |
| `Location`                | Gets or sets the Location.                                    |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `CrackID`                 | Gets the CrackID.                                             |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* CrackInitiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CenterXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CenterYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CenterZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CriterionValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriterionValue.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CrackShape *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackShape](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackShape.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackShape) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackShape.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CrackOrientation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackOrientation](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackOrientation.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackOrientation.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CrackCenter *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackCenter](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackCenter.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackCenter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackCenter.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.InitiationCriterion *: Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.InitiationCriterion | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InitiationCriterion.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CrackInitiation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CrackInitiation.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### CrackInitiation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CrackInitiation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CrackInitiation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CrackInitiation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

