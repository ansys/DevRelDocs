# CylindricalCrack

<a id="CylindricalCrack"></a>

### *class* CylindricalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CylindricalCrack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#CylindricalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#CylindricalCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CylindricalCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CylindricalCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CylindricalCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CylindricalCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CylindricalCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CylindricalCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CylindricalCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CylindricalCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CylindricalCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CylindricalCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CylindricalCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CylindricalCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CylindricalCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#CylindricalCrack.XScaleFactor)                                                                    | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#CylindricalCrack.YScaleFactor)                                                                    | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#CylindricalCrack.ZScaleFactor)                                                                    | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#CylindricalCrack.CircumferentialDivisions)                                            | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#CylindricalCrack.CrackFrontDivisions)                                                      | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#CylindricalCrack.GrowthRate)                                                                        | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#CylindricalCrack.MeshContours)                                                                    | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#CylindricalCrack.SolutionContours)                                                            | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#CylindricalCrack.Contact1Nodes)                                                                  | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#CylindricalCrack.CrackFrontNodes)                                                              | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#CylindricalCrack.BottomFaceNodes)                                                              | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#CylindricalCrack.TopFaceNodes)                                                                    | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#CylindricalCrack.Target1Nodes)                                                                    | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#CylindricalCrack.FractureAffectedZoneHeight)                                        | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#CylindricalCrack.FrontElementSize)                                                            | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#CylindricalCrack.LargestContourRadius)                                                    | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#CylindricalCrack.MajorRadius)                                                                      | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#CylindricalCrack.MinorRadius)                                                                      | Gets or sets the MinorRadius.                                 |
| [`Height`](#CylindricalCrack.Height)                                                                                | Gets or sets the Height.                                      |
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#CylindricalCrack.CrackShape)                                                                        | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#CylindricalCrack.ContactPairsNodes)                                                          | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#CylindricalCrack.CrackFacesNodes)                                                              | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#CylindricalCrack.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#CylindricalCrack.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#CylindricalCrack.CrackID)                                                                              | Gets the CrackID.                                             |
| [`Children`](#CylindricalCrack.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#CylindricalCrack.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#CylindricalCrack.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#CylindricalCrack.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#CylindricalCrack.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CylindricalCrack.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CylindricalCrack.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CylindricalCrack
```

<a id="property-detail"></a>

## Property detail

<a id="CylindricalCrack.InternalObject"></a>

### *property* CylindricalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.XScaleFactor"></a>

### *property* CylindricalCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.YScaleFactor"></a>

### *property* CylindricalCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ZScaleFactor"></a>

### *property* CylindricalCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CircumferentialDivisions"></a>

### *property* CylindricalCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontDivisions"></a>

### *property* CylindricalCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GrowthRate"></a>

### *property* CylindricalCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MeshContours"></a>

### *property* CylindricalCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.SolutionContours"></a>

### *property* CylindricalCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Contact1Nodes"></a>

### *property* CylindricalCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontNodes"></a>

### *property* CylindricalCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.BottomFaceNodes"></a>

### *property* CylindricalCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.TopFaceNodes"></a>

### *property* CylindricalCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Target1Nodes"></a>

### *property* CylindricalCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZoneHeight"></a>

### *property* CylindricalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FrontElementSize"></a>

### *property* CylindricalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.LargestContourRadius"></a>

### *property* CylindricalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MajorRadius"></a>

### *property* CylindricalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MinorRadius"></a>

### *property* CylindricalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Height"></a>

### *property* CylindricalCrack.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZone"></a>

### *property* CylindricalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackMeshMethod"></a>

### *property* CylindricalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackShape"></a>

### *property* CylindricalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackSourceType"></a>

### *property* CylindricalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ContactPairsNodes"></a>

### *property* CylindricalCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFacesNodes"></a>

### *property* CylindricalCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Suppressed"></a>

### *property* CylindricalCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CoordinateSystem"></a>

### *property* CylindricalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Location"></a>

### *property* CylindricalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.DataModelObjectCategory"></a>

### *property* CylindricalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackID"></a>

### *property* CylindricalCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Children"></a>

### *property* CylindricalCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Comments"></a>

### *property* CylindricalCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Figures"></a>

### *property* CylindricalCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Images"></a>

### *property* CylindricalCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ReadOnly"></a>

### *property* CylindricalCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CylindricalCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Properties"></a>

### *property* CylindricalCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.VisibleProperties"></a>

### *property* CylindricalCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalCrack.AddCommandSnippet"></a>

### CylindricalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Delete"></a>

### CylindricalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetChildren"></a>

### CylindricalCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CylindricalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddComment"></a>

### CylindricalCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddFigure"></a>

### CylindricalCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddImage"></a>

### CylindricalCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Activate"></a>

### CylindricalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CopyTo"></a>

### CylindricalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Duplicate"></a>

### CylindricalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupAllSimilarChildren"></a>

### CylindricalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupSimilarObjects"></a>

### CylindricalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByName"></a>

### CylindricalCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByAPIName"></a>

### CylindricalCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CreateParameter"></a>

### CylindricalCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetParameter"></a>

### CylindricalCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.RemoveParameter"></a>

### CylindricalCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
