<a id="semiellipticalcrack"></a>

# SemiEllipticalCrack

<a id="SemiEllipticalCrack"></a>

### *class* SemiEllipticalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SemiEllipticalCrack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#SemiEllipticalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#SemiEllipticalCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SemiEllipticalCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SemiEllipticalCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SemiEllipticalCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SemiEllipticalCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SemiEllipticalCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SemiEllipticalCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SemiEllipticalCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SemiEllipticalCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SemiEllipticalCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SemiEllipticalCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SemiEllipticalCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SemiEllipticalCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SemiEllipticalCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#SemiEllipticalCrack.XScaleFactor)                                                                 | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#SemiEllipticalCrack.YScaleFactor)                                                                 | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#SemiEllipticalCrack.ZScaleFactor)                                                                 | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#SemiEllipticalCrack.CircumferentialDivisions)                                         | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#SemiEllipticalCrack.CrackFrontDivisions)                                                   | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#SemiEllipticalCrack.GrowthRate)                                                                     | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#SemiEllipticalCrack.MeshContours)                                                                 | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#SemiEllipticalCrack.SolutionContours)                                                         | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#SemiEllipticalCrack.Contact1Nodes)                                                               | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#SemiEllipticalCrack.CrackFrontNodes)                                                           | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#SemiEllipticalCrack.BottomFaceNodes)                                                           | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#SemiEllipticalCrack.TopFaceNodes)                                                                 | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#SemiEllipticalCrack.Target1Nodes)                                                                 | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#SemiEllipticalCrack.FractureAffectedZoneHeight)                                     | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#SemiEllipticalCrack.FrontElementSize)                                                         | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#SemiEllipticalCrack.LargestContourRadius)                                                 | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#SemiEllipticalCrack.MajorRadius)                                                                   | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#SemiEllipticalCrack.MinorRadius)                                                                   | Gets or sets the MinorRadius.                                 |
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#SemiEllipticalCrack.CrackShape)                                                                     | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`AlignWithFaceNormal`](#SemiEllipticalCrack.AlignWithFaceNormal)                                                   | Gets or sets the AlignWithFaceNormal.                         |
| [`ProjectToNearestSurface`](#SemiEllipticalCrack.ProjectToNearestSurface)                                           | Gets or sets the ProjectToNearestSurface.                     |
| [`ContactPairsNodes`](#SemiEllipticalCrack.ContactPairsNodes)                                                       | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#SemiEllipticalCrack.CrackFacesNodes)                                                           | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#SemiEllipticalCrack.Suppressed)                                                                     | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#SemiEllipticalCrack.Location)                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#SemiEllipticalCrack.CrackID)                                                                           | Gets the CrackID.                                             |
| [`Children`](#SemiEllipticalCrack.Children)                                                                         | Gets the list of children.                                    |
| [`Comments`](#SemiEllipticalCrack.Comments)                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#SemiEllipticalCrack.Figures)                                                                           | Gets the list of associated figures.                          |
| [`Images`](#SemiEllipticalCrack.Images)                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#SemiEllipticalCrack.ReadOnly)                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#SemiEllipticalCrack.Properties)                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#SemiEllipticalCrack.VisibleProperties)                                                       | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SemiEllipticalCrack
```

<a id="property-detail"></a>

## Property detail

<a id="SemiEllipticalCrack.InternalObject"></a>

### *property* SemiEllipticalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.XScaleFactor"></a>

### *property* SemiEllipticalCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.YScaleFactor"></a>

### *property* SemiEllipticalCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ZScaleFactor"></a>

### *property* SemiEllipticalCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CircumferentialDivisions"></a>

### *property* SemiEllipticalCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontDivisions"></a>

### *property* SemiEllipticalCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GrowthRate"></a>

### *property* SemiEllipticalCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MeshContours"></a>

### *property* SemiEllipticalCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.SolutionContours"></a>

### *property* SemiEllipticalCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Contact1Nodes"></a>

### *property* SemiEllipticalCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontNodes"></a>

### *property* SemiEllipticalCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.BottomFaceNodes"></a>

### *property* SemiEllipticalCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.TopFaceNodes"></a>

### *property* SemiEllipticalCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Target1Nodes"></a>

### *property* SemiEllipticalCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZoneHeight"></a>

### *property* SemiEllipticalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FrontElementSize"></a>

### *property* SemiEllipticalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.LargestContourRadius"></a>

### *property* SemiEllipticalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MajorRadius"></a>

### *property* SemiEllipticalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MinorRadius"></a>

### *property* SemiEllipticalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZone"></a>

### *property* SemiEllipticalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackMeshMethod"></a>

### *property* SemiEllipticalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackShape"></a>

### *property* SemiEllipticalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackSourceType"></a>

### *property* SemiEllipticalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AlignWithFaceNormal"></a>

### *property* SemiEllipticalCrack.AlignWithFaceNormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ProjectToNearestSurface"></a>

### *property* SemiEllipticalCrack.ProjectToNearestSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ContactPairsNodes"></a>

### *property* SemiEllipticalCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFacesNodes"></a>

### *property* SemiEllipticalCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Suppressed"></a>

### *property* SemiEllipticalCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CoordinateSystem"></a>

### *property* SemiEllipticalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Location"></a>

### *property* SemiEllipticalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.DataModelObjectCategory"></a>

### *property* SemiEllipticalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackID"></a>

### *property* SemiEllipticalCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Children"></a>

### *property* SemiEllipticalCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Comments"></a>

### *property* SemiEllipticalCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Figures"></a>

### *property* SemiEllipticalCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Images"></a>

### *property* SemiEllipticalCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ReadOnly"></a>

### *property* SemiEllipticalCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SemiEllipticalCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Properties"></a>

### *property* SemiEllipticalCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.VisibleProperties"></a>

### *property* SemiEllipticalCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SemiEllipticalCrack.AddCommandSnippet"></a>

### SemiEllipticalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Delete"></a>

### SemiEllipticalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetChildren"></a>

### SemiEllipticalCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SemiEllipticalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### SemiEllipticalCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Activate"></a>

### SemiEllipticalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CopyTo"></a>

### SemiEllipticalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Duplicate"></a>

### SemiEllipticalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupAllSimilarChildren"></a>

### SemiEllipticalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupSimilarObjects"></a>

### SemiEllipticalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByName"></a>

### SemiEllipticalCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByAPIName"></a>

### SemiEllipticalCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CreateParameter"></a>

### SemiEllipticalCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetParameter"></a>

### SemiEllipticalCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.RemoveParameter"></a>

### SemiEllipticalCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
