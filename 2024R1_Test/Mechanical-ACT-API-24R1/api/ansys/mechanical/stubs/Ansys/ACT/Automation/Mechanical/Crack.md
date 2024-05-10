# Crack

<a id="Crack"></a>

### *class* Crack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Crack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#Crack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#Crack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Crack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Crack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Crack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Crack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Crack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Crack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Crack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Crack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Crack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Crack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Crack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Crack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Crack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#Crack.XScaleFactor)                                                                               | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#Crack.YScaleFactor)                                                                               | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#Crack.ZScaleFactor)                                                                               | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#Crack.CircumferentialDivisions)                                                       | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#Crack.CrackFrontDivisions)                                                                 | Gets or sets the CrackFrontDivisions.                         |
| [`MeshContours`](#Crack.MeshContours)                                                                               | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#Crack.SolutionContours)                                                                       | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#Crack.Contact1Nodes)                                                                             | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#Crack.CrackFrontNodes)                                                                         | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#Crack.BottomFaceNodes)                                                                         | Gets or sets the BottomFaceNodes.                             |
| [`FaceTopNodes`](#Crack.FaceTopNodes)                                                                               | Gets or sets the FaceTopNodes.                                |
| [`Target1Nodes`](#Crack.Target1Nodes)                                                                               | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#Crack.FractureAffectedZoneHeight)                                                   | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FractureAffectedZone`](./../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`LargestContourRadius`](#Crack.LargestContourRadius)                                                               | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#Crack.MajorRadius)                                                                                 | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#Crack.MinorRadius)                                                                                 | Gets or sets the MinorRadius.                                 |
| [`CrackShape`](#Crack.CrackShape)                                                                                   | Gets the CrackShape.                                          |
| [`CrackSourceType`](./../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`AlignWithFaceNormal`](#Crack.AlignWithFaceNormal)                                                                 | Gets or sets the AlignWithFaceNormal.                         |
| [`ProjectToNearestSurface`](#Crack.ProjectToNearestSurface)                                                         | Gets or sets the ProjectToNearestSurface.                     |
| [`ContactPairsNodes`](#Crack.ContactPairsNodes)                                                                     | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#Crack.CrackFacesNodes)                                                                         | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#Crack.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](./../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#Crack.Location)                                                                                       | Gets the Location.                                            |
| [`CrackID`](#Crack.CrackID)                                                                                         | Gets the CrackID.                                             |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Crack.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Crack.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#Crack.Figures)                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#Crack.Images)                                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#Crack.ReadOnly)                                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Crack.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Crack.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Crack
```

<a id="property-detail"></a>

## Property detail

<a id="Crack.InternalObject"></a>

### *property* Crack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Crack.XScaleFactor"></a>

### *property* Crack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Crack.YScaleFactor"></a>

### *property* Crack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ZScaleFactor"></a>

### *property* Crack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CircumferentialDivisions"></a>

### *property* Crack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFrontDivisions"></a>

### *property* Crack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MeshContours"></a>

### *property* Crack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="Crack.SolutionContours"></a>

### *property* Crack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Contact1Nodes"></a>

### *property* Crack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFrontNodes"></a>

### *property* Crack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.BottomFaceNodes"></a>

### *property* Crack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FaceTopNodes"></a>

### *property* Crack.FaceTopNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceTopNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Target1Nodes"></a>

### *property* Crack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FractureAffectedZoneHeight"></a>

### *property* Crack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="Crack.FractureAffectedZone"></a>

### *property* Crack.FractureAffectedZone *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="Crack.LargestContourRadius"></a>

### *property* Crack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MajorRadius"></a>

### *property* Crack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.MinorRadius"></a>

### *property* Crack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackShape"></a>

### *property* Crack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](./../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackSourceType"></a>

### *property* Crack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](./../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AlignWithFaceNormal"></a>

### *property* Crack.AlignWithFaceNormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ProjectToNearestSurface"></a>

### *property* Crack.ProjectToNearestSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ContactPairsNodes"></a>

### *property* Crack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackFacesNodes"></a>

### *property* Crack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Suppressed"></a>

### *property* Crack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CoordinateSystem"></a>

### *property* Crack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Location"></a>

### *property* Crack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CrackID"></a>

### *property* Crack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="Crack.DataModelObjectCategory"></a>

### *property* Crack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Children"></a>

### *property* Crack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Comments"></a>

### *property* Crack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Figures"></a>

### *property* Crack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Images"></a>

### *property* Crack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Crack.ReadOnly"></a>

### *property* Crack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Crack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Properties"></a>

### *property* Crack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Crack.VisibleProperties"></a>

### *property* Crack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Crack.AddCommandSnippet"></a>

### Crack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Crack.Delete"></a>

### Crack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetChildren"></a>

### Crack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Crack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddComment"></a>

### Crack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddFigure"></a>

### Crack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Crack.AddImage"></a>

### Crack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Activate"></a>

### Crack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CopyTo"></a>

### Crack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Crack.Duplicate"></a>

### Crack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GroupAllSimilarChildren"></a>

### Crack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GroupSimilarObjects"></a>

### Crack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Crack.PropertyByName"></a>

### Crack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Crack.PropertyByAPIName"></a>

### Crack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Crack.CreateParameter"></a>

### Crack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.GetParameter"></a>

### Crack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Crack.RemoveParameter"></a>

### Crack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
