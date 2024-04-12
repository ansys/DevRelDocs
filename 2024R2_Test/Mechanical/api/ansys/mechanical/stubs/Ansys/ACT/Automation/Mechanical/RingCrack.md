<a id="ringcrack"></a>

# RingCrack

<a id="RingCrack"></a>

### *class* RingCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RingCrack.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddCommandSnippet`](#RingCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RingCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RingCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RingCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RingCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RingCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RingCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RingCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RingCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RingCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RingCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RingCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RingCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RingCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RingCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`XScaleFactor`](#RingCrack.XScaleFactor)                                                                           | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#RingCrack.YScaleFactor)                                                                           | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#RingCrack.ZScaleFactor)                                                                           | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#RingCrack.CircumferentialDivisions)                                                   | Gets or sets the CircumferentialDivisions.                    |
| [`OuterCrackFrontDivisions`](#RingCrack.OuterCrackFrontDivisions)                                                   | Gets or sets the OuterCrackFrontDivisions.                    |
| [`GrowthRate`](#RingCrack.GrowthRate)                                                                               | Gets or sets the GrowthRate.                                  |
| [`InnerCrackFrontDivisions`](#RingCrack.InnerCrackFrontDivisions)                                                   | Gets or sets the InnerCrackFrontDivisions.                    |
| [`MeshContours`](#RingCrack.MeshContours)                                                                           | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#RingCrack.SolutionContours)                                                                   | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#RingCrack.Contact1Nodes)                                                                         | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#RingCrack.CrackFrontNodes)                                                                     | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#RingCrack.BottomFaceNodes)                                                                     | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#RingCrack.TopFaceNodes)                                                                           | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#RingCrack.Target1Nodes)                                                                           | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#RingCrack.FractureAffectedZoneHeight)                                               | Gets or sets the FractureAffectedZoneHeight.                  |
| [`OuterFrontElementSize`](#RingCrack.OuterFrontElementSize)                                                         | Gets or sets the OuterFrontElementSize.                       |
| [`LargestContourRadius`](#RingCrack.LargestContourRadius)                                                           | Gets or sets the LargestContourRadius.                        |
| [`InnerMajorRadius`](#RingCrack.InnerMajorRadius)                                                                   | Gets or sets the InnerMajorRadius.                            |
| [`InnerMinorRadius`](#RingCrack.InnerMinorRadius)                                                                   | Gets or sets the InnerMinorRadius.                            |
| [`OuterMajorRadius`](#RingCrack.OuterMajorRadius)                                                                   | Gets or sets the OuterMajorRadius.                            |
| [`OuterMinorRadius`](#RingCrack.OuterMinorRadius)                                                                   | Gets or sets the OuterMinorRadius.                            |
| [`InnerFrontElementSize`](#RingCrack.InnerFrontElementSize)                                                         | Gets or sets the InnerFrontElementSize.                       |
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#RingCrack.CrackShape)                                                                               | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#RingCrack.ContactPairsNodes)                                                                 | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#RingCrack.CrackFacesNodes)                                                                     | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#RingCrack.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#RingCrack.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#RingCrack.CrackID)                                                                                     | Gets the CrackID.                                             |
| [`Children`](#RingCrack.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#RingCrack.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#RingCrack.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#RingCrack.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#RingCrack.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RingCrack.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RingCrack.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import RingCrack
```

<a id="property-detail"></a>

## Property detail

<a id="RingCrack.InternalObject"></a>

### *property* RingCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.XScaleFactor"></a>

### *property* RingCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.YScaleFactor"></a>

### *property* RingCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.ZScaleFactor"></a>

### *property* RingCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CircumferentialDivisions"></a>

### *property* RingCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.OuterCrackFrontDivisions"></a>

### *property* RingCrack.OuterCrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterCrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.GrowthRate"></a>

### *property* RingCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.InnerCrackFrontDivisions"></a>

### *property* RingCrack.InnerCrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerCrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.MeshContours"></a>

### *property* RingCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.SolutionContours"></a>

### *property* RingCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Contact1Nodes"></a>

### *property* RingCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackFrontNodes"></a>

### *property* RingCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.BottomFaceNodes"></a>

### *property* RingCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.TopFaceNodes"></a>

### *property* RingCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Target1Nodes"></a>

### *property* RingCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.FractureAffectedZoneHeight"></a>

### *property* RingCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.OuterFrontElementSize"></a>

### *property* RingCrack.OuterFrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterFrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.LargestContourRadius"></a>

### *property* RingCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.InnerMajorRadius"></a>

### *property* RingCrack.InnerMajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerMajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.InnerMinorRadius"></a>

### *property* RingCrack.InnerMinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerMinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.OuterMajorRadius"></a>

### *property* RingCrack.OuterMajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterMajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.OuterMinorRadius"></a>

### *property* RingCrack.OuterMinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OuterMinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.InnerFrontElementSize"></a>

### *property* RingCrack.InnerFrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InnerFrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.FractureAffectedZone"></a>

### *property* RingCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackMeshMethod"></a>

### *property* RingCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackShape"></a>

### *property* RingCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackSourceType"></a>

### *property* RingCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.ContactPairsNodes"></a>

### *property* RingCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackFacesNodes"></a>

### *property* RingCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Suppressed"></a>

### *property* RingCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CoordinateSystem"></a>

### *property* RingCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Location"></a>

### *property* RingCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.DataModelObjectCategory"></a>

### *property* RingCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackID"></a>

### *property* RingCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Children"></a>

### *property* RingCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Comments"></a>

### *property* RingCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Figures"></a>

### *property* RingCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Images"></a>

### *property* RingCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.ReadOnly"></a>

### *property* RingCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RingCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Properties"></a>

### *property* RingCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.VisibleProperties"></a>

### *property* RingCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RingCrack.AddCommandSnippet"></a>

### RingCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Delete"></a>

### RingCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.GetChildren"></a>

### RingCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RingCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.AddComment"></a>

### RingCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.AddFigure"></a>

### RingCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.AddImage"></a>

### RingCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Activate"></a>

### RingCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CopyTo"></a>

### RingCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Duplicate"></a>

### RingCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.GroupAllSimilarChildren"></a>

### RingCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.GroupSimilarObjects"></a>

### RingCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.PropertyByName"></a>

### RingCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.PropertyByAPIName"></a>

### RingCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CreateParameter"></a>

### RingCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.GetParameter"></a>

### RingCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.RemoveParameter"></a>

### RingCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
