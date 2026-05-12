# `CrackInitiation`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CrackInitiation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CrackInitiation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CrackInitiation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CrackInitiation.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#CrackInitiation.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#CrackInitiation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CrackInitiation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CrackInitiation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CrackInitiation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CrackInitiation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CrackInitiation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CrackInitiation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CrackInitiation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CrackInitiation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CrackInitiation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CrackInitiation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CrackInitiation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CrackInitiation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CrackInitiation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`BottomFaceNodes`](#CrackInitiation.BottomFaceNodes)                 | Gets or sets the BottomFaceNodes.                             |
| [`CenterXCoordinate`](#CrackInitiation.CenterXCoordinate)             | Gets or sets the CenterXCoordinate.                           |
| [`CenterYCoordinate`](#CrackInitiation.CenterYCoordinate)             | Gets or sets the CenterYCoordinate.                           |
| [`CenterZCoordinate`](#CrackInitiation.CenterZCoordinate)             | Gets or sets the CenterZCoordinate.                           |
| [`Children`](#CrackInitiation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CrackInitiation.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CrackInitiation.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`CrackCenter`](#CrackInitiation.CrackCenter)                         | Gets or sets the CrackCenter.                                 |
| [`CrackID`](#CrackInitiation.CrackID)                                 | Gets the CrackID.                                             |
| [`CrackOrientation`](#CrackInitiation.CrackOrientation)               | Gets or sets the CrackOrientation.                            |
| [`CrackShape`](#CrackInitiation.CrackShape)                           | Gets or sets the CrackShape.                                  |
| [`CrackSourceType`](#CrackInitiation.CrackSourceType)                 | Gets the CrackSourceType.                                     |
| [`CriterionValue`](#CrackInitiation.CriterionValue)                   | Gets or sets the CriterionValue.                              |
| [`DataModelObjectCategory`](#CrackInitiation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CrackInitiation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CrackInitiation.Images)                                   | Gets the list of associated images.                           |
| [`InitiationCriterion`](#CrackInitiation.InitiationCriterion)         | Gets the InitiationCriterion.                                 |
| [`InternalObject`](#CrackInitiation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CrackInitiation.Location)                               | Gets or sets the Location.                                    |
| [`MajorRadius`](#CrackInitiation.MajorRadius)                         | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#CrackInitiation.MinorRadius)                         | Gets or sets the MinorRadius.                                 |
| [`NamedSelection`](#CrackInitiation.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Properties`](#CrackInitiation.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CrackInitiation.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`ScopingMethod`](#CrackInitiation.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`SolutionContours`](#CrackInitiation.SolutionContours)               | Gets or sets the SolutionContours.                            |
| [`Suppressed`](#CrackInitiation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TopFaceNodes`](#CrackInitiation.TopFaceNodes)                       | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#CrackInitiation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CrackInitiation.BottomFaceNodes"></a>

### *property* CrackInitiation.BottomFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CenterXCoordinate"></a>

### *property* CrackInitiation.CenterXCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CenterYCoordinate"></a>

### *property* CrackInitiation.CenterYCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CenterZCoordinate"></a>

### *property* CrackInitiation.CenterZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CenterZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Children"></a>

### *property* CrackInitiation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Comments"></a>

### *property* CrackInitiation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CoordinateSystem"></a>

### *property* CrackInitiation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CrackCenter"></a>

### *property* CrackInitiation.CrackCenter *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackCenter](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackCenter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackCenter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackCenter.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CrackID"></a>

### *property* CrackInitiation.CrackID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CrackOrientation"></a>

### *property* CrackInitiation.CrackOrientation *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackOrientation](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackOrientation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackOrientation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackOrientation.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CrackShape"></a>

### *property* CrackInitiation.CrackShape *: [Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackShape](../../../Mechanical/DataModel/MechanicalEnums/CrackInitiation/CrackShape.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.CrackShape) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CrackSourceType"></a>

### *property* CrackInitiation.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CriterionValue"></a>

### *property* CrackInitiation.CriterionValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriterionValue.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.DataModelObjectCategory"></a>

### *property* CrackInitiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Figures"></a>

### *property* CrackInitiation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Images"></a>

### *property* CrackInitiation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.InitiationCriterion"></a>

### *property* CrackInitiation.InitiationCriterion *: Ansys.Mechanical.DataModel.MechanicalEnums.CrackInitiation.InitiationCriterion | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InitiationCriterion.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.InternalObject"></a>

### *property* CrackInitiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Location"></a>

### *property* CrackInitiation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.MajorRadius"></a>

### *property* CrackInitiation.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.MinorRadius"></a>

### *property* CrackInitiation.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.NamedSelection"></a>

### *property* CrackInitiation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Properties"></a>

### *property* CrackInitiation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.ReadOnly"></a>

### *property* CrackInitiation.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.ScopingMethod"></a>

### *property* CrackInitiation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.SolutionContours"></a>

### *property* CrackInitiation.SolutionContours *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Suppressed"></a>

### *property* CrackInitiation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.TopFaceNodes"></a>

### *property* CrackInitiation.TopFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.VisibleProperties"></a>

### *property* CrackInitiation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CrackInitiation.Activate"></a>

### CrackInitiation.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.AddCommandSnippet"></a>

### CrackInitiation.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.AddComment"></a>

### CrackInitiation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.AddFigure"></a>

### CrackInitiation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.AddImage"></a>

### CrackInitiation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CopyTo"></a>

### CrackInitiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.CreateParameter"></a>

### CrackInitiation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Delete"></a>

### CrackInitiation.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.Duplicate"></a>

### CrackInitiation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.GetChildren"></a>

### CrackInitiation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.GetParameter"></a>

### CrackInitiation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.GroupAllSimilarChildren"></a>

### CrackInitiation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.GroupSimilarObjects"></a>

### CrackInitiation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.PropertyByAPIName"></a>

### CrackInitiation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.PropertyByName"></a>

### CrackInitiation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CrackInitiation.RemoveParameter"></a>

### CrackInitiation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

