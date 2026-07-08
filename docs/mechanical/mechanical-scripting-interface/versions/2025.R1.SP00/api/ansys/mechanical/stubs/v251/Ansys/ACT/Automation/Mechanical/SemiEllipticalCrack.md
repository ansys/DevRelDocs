# `SemiEllipticalCrack`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SemiEllipticalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SemiEllipticalCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#SemiEllipticalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#SemiEllipticalCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SemiEllipticalCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SemiEllipticalCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SemiEllipticalCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SemiEllipticalCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SemiEllipticalCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SemiEllipticalCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SemiEllipticalCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SemiEllipticalCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SemiEllipticalCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SemiEllipticalCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SemiEllipticalCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SemiEllipticalCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SemiEllipticalCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AlignWithFaceNormal`](#SemiEllipticalCrack.AlignWithFaceNormal)               | Gets or sets the AlignWithFaceNormal.                         |
| [`BottomFaceNodes`](#SemiEllipticalCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#SemiEllipticalCrack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#SemiEllipticalCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`Comments`](#SemiEllipticalCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#SemiEllipticalCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#SemiEllipticalCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](#SemiEllipticalCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#SemiEllipticalCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#SemiEllipticalCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#SemiEllipticalCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#SemiEllipticalCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#SemiEllipticalCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#SemiEllipticalCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#SemiEllipticalCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#SemiEllipticalCrack.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SemiEllipticalCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#SemiEllipticalCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#SemiEllipticalCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#SemiEllipticalCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`GrowthRate`](#SemiEllipticalCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`Images`](#SemiEllipticalCrack.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#SemiEllipticalCrack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#SemiEllipticalCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#SemiEllipticalCrack.Location)                                     | Gets or sets the Location.                                    |
| [`MajorRadius`](#SemiEllipticalCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MeshContours`](#SemiEllipticalCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MinorRadius`](#SemiEllipticalCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`ProjectToNearestSurface`](#SemiEllipticalCrack.ProjectToNearestSurface)       | Gets or sets the ProjectToNearestSurface.                     |
| [`Properties`](#SemiEllipticalCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SemiEllipticalCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#SemiEllipticalCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Suppressed`](#SemiEllipticalCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#SemiEllipticalCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TopFaceNodes`](#SemiEllipticalCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#SemiEllipticalCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#SemiEllipticalCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#SemiEllipticalCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#SemiEllipticalCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="SemiEllipticalCrack.AlignWithFaceNormal"></a>

### *property* SemiEllipticalCrack.AlignWithFaceNormal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.BottomFaceNodes"></a>

### *property* SemiEllipticalCrack.BottomFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Children"></a>

### *property* SemiEllipticalCrack.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CircumferentialDivisions"></a>

### *property* SemiEllipticalCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Comments"></a>

### *property* SemiEllipticalCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Contact1Nodes"></a>

### *property* SemiEllipticalCrack.Contact1Nodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ContactPairsNodes"></a>

### *property* SemiEllipticalCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CoordinateSystem"></a>

### *property* SemiEllipticalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFacesNodes"></a>

### *property* SemiEllipticalCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontDivisions"></a>

### *property* SemiEllipticalCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontNodes"></a>

### *property* SemiEllipticalCrack.CrackFrontNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackID"></a>

### *property* SemiEllipticalCrack.CrackID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackMeshMethod"></a>

### *property* SemiEllipticalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackShape"></a>

### *property* SemiEllipticalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackSourceType"></a>

### *property* SemiEllipticalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.DataModelObjectCategory"></a>

### *property* SemiEllipticalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Figures"></a>

### *property* SemiEllipticalCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZone"></a>

### *property* SemiEllipticalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZoneHeight"></a>

### *property* SemiEllipticalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FrontElementSize"></a>

### *property* SemiEllipticalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GrowthRate"></a>

### *property* SemiEllipticalCrack.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Images"></a>

### *property* SemiEllipticalCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.InternalObject"></a>

### *property* SemiEllipticalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.LargestContourRadius"></a>

### *property* SemiEllipticalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Location"></a>

### *property* SemiEllipticalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MajorRadius"></a>

### *property* SemiEllipticalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MeshContours"></a>

### *property* SemiEllipticalCrack.MeshContours *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MinorRadius"></a>

### *property* SemiEllipticalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ProjectToNearestSurface"></a>

### *property* SemiEllipticalCrack.ProjectToNearestSurface *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Properties"></a>

### *property* SemiEllipticalCrack.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ReadOnly"></a>

### *property* SemiEllipticalCrack.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.SolutionContours"></a>

### *property* SemiEllipticalCrack.SolutionContours *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Suppressed"></a>

### *property* SemiEllipticalCrack.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Target1Nodes"></a>

### *property* SemiEllipticalCrack.Target1Nodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.TopFaceNodes"></a>

### *property* SemiEllipticalCrack.TopFaceNodes *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.VisibleProperties"></a>

### *property* SemiEllipticalCrack.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.XScaleFactor"></a>

### *property* SemiEllipticalCrack.XScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.YScaleFactor"></a>

### *property* SemiEllipticalCrack.YScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ZScaleFactor"></a>

### *property* SemiEllipticalCrack.ZScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SemiEllipticalCrack.Activate"></a>

### SemiEllipticalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddCommandSnippet"></a>

### SemiEllipticalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddComment"></a>

### SemiEllipticalCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddFigure"></a>

### SemiEllipticalCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddImage"></a>

### SemiEllipticalCrack.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CopyTo"></a>

### SemiEllipticalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CreateParameter"></a>

### SemiEllipticalCrack.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Delete"></a>

### SemiEllipticalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Duplicate"></a>

### SemiEllipticalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetChildren"></a>

### SemiEllipticalCrack.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetParameter"></a>

### SemiEllipticalCrack.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupAllSimilarChildren"></a>

### SemiEllipticalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupSimilarObjects"></a>

### SemiEllipticalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByAPIName"></a>

### SemiEllipticalCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByName"></a>

### SemiEllipticalCrack.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.RemoveParameter"></a>

### SemiEllipticalCrack.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

