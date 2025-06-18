# `CornerCrack`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CornerCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CornerCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CornerCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CornerCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#CornerCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#CornerCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CornerCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CornerCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CornerCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CornerCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CornerCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CornerCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CornerCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CornerCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CornerCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CornerCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CornerCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CornerCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CornerCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BottomFaceNodes`](#CornerCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#CornerCrack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#CornerCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`Comments`](#CornerCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#CornerCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#CornerCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](#CornerCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#CornerCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#CornerCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#CornerCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#CornerCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#CornerCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#CornerCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#CornerCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#CornerCrack.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CornerCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#CornerCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#CornerCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#CornerCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`GrowthRate`](#CornerCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`Images`](#CornerCrack.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#CornerCrack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#CornerCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#CornerCrack.Location)                                     | Gets or sets the Location.                                    |
| [`MajorRadius`](#CornerCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MeshContours`](#CornerCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MinorRadius`](#CornerCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`Properties`](#CornerCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CornerCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#CornerCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Suppressed`](#CornerCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#CornerCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TopFaceNodes`](#CornerCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#CornerCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#CornerCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#CornerCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#CornerCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="CornerCrack.BottomFaceNodes"></a>

### *property* CornerCrack.BottomFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Children"></a>

### *property* CornerCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CircumferentialDivisions"></a>

### *property* CornerCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Comments"></a>

### *property* CornerCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Contact1Nodes"></a>

### *property* CornerCrack.Contact1Nodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ContactPairsNodes"></a>

### *property* CornerCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CoordinateSystem"></a>

### *property* CornerCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFacesNodes"></a>

### *property* CornerCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFrontDivisions"></a>

### *property* CornerCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFrontNodes"></a>

### *property* CornerCrack.CrackFrontNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackID"></a>

### *property* CornerCrack.CrackID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackMeshMethod"></a>

### *property* CornerCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackShape"></a>

### *property* CornerCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackSourceType"></a>

### *property* CornerCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.DataModelObjectCategory"></a>

### *property* CornerCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Figures"></a>

### *property* CornerCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FractureAffectedZone"></a>

### *property* CornerCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FractureAffectedZoneHeight"></a>

### *property* CornerCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FrontElementSize"></a>

### *property* CornerCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GrowthRate"></a>

### *property* CornerCrack.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Images"></a>

### *property* CornerCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.InternalObject"></a>

### *property* CornerCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.LargestContourRadius"></a>

### *property* CornerCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Location"></a>

### *property* CornerCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MajorRadius"></a>

### *property* CornerCrack.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MeshContours"></a>

### *property* CornerCrack.MeshContours *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MinorRadius"></a>

### *property* CornerCrack.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Properties"></a>

### *property* CornerCrack.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ReadOnly"></a>

### *property* CornerCrack.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.SolutionContours"></a>

### *property* CornerCrack.SolutionContours *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Suppressed"></a>

### *property* CornerCrack.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Target1Nodes"></a>

### *property* CornerCrack.Target1Nodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.TopFaceNodes"></a>

### *property* CornerCrack.TopFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.VisibleProperties"></a>

### *property* CornerCrack.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.XScaleFactor"></a>

### *property* CornerCrack.XScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.YScaleFactor"></a>

### *property* CornerCrack.YScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ZScaleFactor"></a>

### *property* CornerCrack.ZScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CornerCrack.Activate"></a>

### CornerCrack.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddCommandSnippet"></a>

### CornerCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddComment"></a>

### CornerCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddFigure"></a>

### CornerCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddImage"></a>

### CornerCrack.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CopyTo"></a>

### CornerCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CreateParameter"></a>

### CornerCrack.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Delete"></a>

### CornerCrack.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Duplicate"></a>

### CornerCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GetChildren"></a>

### CornerCrack.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GetParameter"></a>

### CornerCrack.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GroupAllSimilarChildren"></a>

### CornerCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GroupSimilarObjects"></a>

### CornerCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.PropertyByAPIName"></a>

### CornerCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.PropertyByName"></a>

### CornerCrack.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.RemoveParameter"></a>

### CornerCrack.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

