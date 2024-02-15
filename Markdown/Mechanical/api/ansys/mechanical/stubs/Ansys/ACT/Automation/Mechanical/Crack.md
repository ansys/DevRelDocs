# Crack

### *class* Crack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Crack.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#Crack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`LargestContourRadius`](#Crack.LargestContourRadius)                                                               | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#Crack.MajorRadius)                                                                                 | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#Crack.MinorRadius)                                                                                 | Gets or sets the MinorRadius.                                 |
| [`CrackShape`](#Crack.CrackShape)                                                                                   | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`AlignWithFaceNormal`](#Crack.AlignWithFaceNormal)                                                                 | Gets or sets the AlignWithFaceNormal.                         |
| [`ProjectToNearestSurface`](#Crack.ProjectToNearestSurface)                                                         | Gets or sets the ProjectToNearestSurface.                     |
| [`ContactPairsNodes`](#Crack.ContactPairsNodes)                                                                     | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#Crack.CrackFacesNodes)                                                                         | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#Crack.Suppressed)                                                                                   | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#Crack.Location)                                                                                       | Gets the Location.                                            |
| [`CrackID`](#Crack.CrackID)                                                                                         | Gets the CrackID.                                             |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Crack.Children)                                                                                       | Gets the list of children.                                    |
| [`Comments`](#Crack.Comments)                                                                                       | Gets the list of associated comments.                         |
| [`Figures`](#Crack.Figures)                                                                                         | Gets the list of associated figures.                          |
| [`Images`](#Crack.Images)                                                                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#Crack.ReadOnly)                                                                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Crack.Properties)                                                                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Crack.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Crack
```

## Property detail

### *property* Crack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Crack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* Crack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* Crack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

### *property* Crack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

### *property* Crack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.FaceTopNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceTopNodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

### *property* Crack.FractureAffectedZone *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

### *property* Crack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

### *property* Crack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

### *property* Crack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

### *property* Crack.AlignWithFaceNormal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

### *property* Crack.ProjectToNearestSurface *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

### *property* Crack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Crack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* Crack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Crack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Crack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Crack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Crack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Crack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Crack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Crack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Crack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Crack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Crack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Crack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Crack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Crack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Crack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Crack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Crack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Crack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Crack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Crack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Crack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Crack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
