<a id="throughcrack"></a>

# ThroughCrack

<a id="ThroughCrack"></a>

### *class* ThroughCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ThroughCrack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#ThroughCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#ThroughCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ThroughCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ThroughCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ThroughCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ThroughCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ThroughCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ThroughCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ThroughCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThroughCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ThroughCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ThroughCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ThroughCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ThroughCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ThroughCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#ThroughCrack.XScaleFactor)                                                                        | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#ThroughCrack.YScaleFactor)                                                                        | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#ThroughCrack.ZScaleFactor)                                                                        | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#ThroughCrack.CircumferentialDivisions)                                                | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#ThroughCrack.CrackFrontDivisions)                                                          | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#ThroughCrack.GrowthRate)                                                                            | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#ThroughCrack.MeshContours)                                                                        | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#ThroughCrack.SolutionContours)                                                                | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#ThroughCrack.Contact1Nodes)                                                                      | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#ThroughCrack.CrackFrontNodes)                                                                  | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#ThroughCrack.BottomFaceNodes)                                                                  | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#ThroughCrack.TopFaceNodes)                                                                        | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#ThroughCrack.Target1Nodes)                                                                        | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#ThroughCrack.FractureAffectedZoneHeight)                                            | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#ThroughCrack.FrontElementSize)                                                                | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#ThroughCrack.LargestContourRadius)                                                        | Gets or sets the LargestContourRadius.                        |
| [`Depth`](#ThroughCrack.Depth)                                                                                      | Gets or sets the Depth.                                       |
| [`EndWidth`](#ThroughCrack.EndWidth)                                                                                | Gets or sets the EndWidth.                                    |
| [`MidWidth`](#ThroughCrack.MidWidth)                                                                                | Gets or sets the MidWidth.                                    |
| [`StartWidth`](#ThroughCrack.StartWidth)                                                                            | Gets or sets the StartWidth.                                  |
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#ThroughCrack.CrackShape)                                                                            | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#ThroughCrack.ContactPairsNodes)                                                              | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#ThroughCrack.CrackFacesNodes)                                                                  | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#ThroughCrack.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#ThroughCrack.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#ThroughCrack.CrackID)                                                                                  | Gets the CrackID.                                             |
| [`Children`](#ThroughCrack.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#ThroughCrack.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#ThroughCrack.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#ThroughCrack.Images)                                                                                    | Gets the list of associated images.                           |
| [`ReadOnly`](#ThroughCrack.ReadOnly)                                                                                | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ThroughCrack.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ThroughCrack.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ThroughCrack
```

<a id="property-detail"></a>

## Property detail

<a id="ThroughCrack.InternalObject"></a>

### *property* ThroughCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.XScaleFactor"></a>

### *property* ThroughCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.YScaleFactor"></a>

### *property* ThroughCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ZScaleFactor"></a>

### *property* ThroughCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CircumferentialDivisions"></a>

### *property* ThroughCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontDivisions"></a>

### *property* ThroughCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GrowthRate"></a>

### *property* ThroughCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MeshContours"></a>

### *property* ThroughCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.SolutionContours"></a>

### *property* ThroughCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Contact1Nodes"></a>

### *property* ThroughCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontNodes"></a>

### *property* ThroughCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.BottomFaceNodes"></a>

### *property* ThroughCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.TopFaceNodes"></a>

### *property* ThroughCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Target1Nodes"></a>

### *property* ThroughCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZoneHeight"></a>

### *property* ThroughCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FrontElementSize"></a>

### *property* ThroughCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.LargestContourRadius"></a>

### *property* ThroughCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Depth"></a>

### *property* ThroughCrack.Depth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.EndWidth"></a>

### *property* ThroughCrack.EndWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MidWidth"></a>

### *property* ThroughCrack.MidWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.StartWidth"></a>

### *property* ThroughCrack.StartWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZone"></a>

### *property* ThroughCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackMeshMethod"></a>

### *property* ThroughCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackShape"></a>

### *property* ThroughCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackSourceType"></a>

### *property* ThroughCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ContactPairsNodes"></a>

### *property* ThroughCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFacesNodes"></a>

### *property* ThroughCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Suppressed"></a>

### *property* ThroughCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CoordinateSystem"></a>

### *property* ThroughCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Location"></a>

### *property* ThroughCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.DataModelObjectCategory"></a>

### *property* ThroughCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackID"></a>

### *property* ThroughCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Children"></a>

### *property* ThroughCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Comments"></a>

### *property* ThroughCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Figures"></a>

### *property* ThroughCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Images"></a>

### *property* ThroughCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ReadOnly"></a>

### *property* ThroughCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ThroughCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Properties"></a>

### *property* ThroughCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.VisibleProperties"></a>

### *property* ThroughCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThroughCrack.AddCommandSnippet"></a>

### ThroughCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Delete"></a>

### ThroughCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetChildren"></a>

### ThroughCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ThroughCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddComment"></a>

### ThroughCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddFigure"></a>

### ThroughCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddImage"></a>

### ThroughCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Activate"></a>

### ThroughCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CopyTo"></a>

### ThroughCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Duplicate"></a>

### ThroughCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupAllSimilarChildren"></a>

### ThroughCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupSimilarObjects"></a>

### ThroughCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByName"></a>

### ThroughCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByAPIName"></a>

### ThroughCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CreateParameter"></a>

### ThroughCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetParameter"></a>

### ThroughCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.RemoveParameter"></a>

### ThroughCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
