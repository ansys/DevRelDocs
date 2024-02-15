# EdgeCrack

### *class* EdgeCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EdgeCrack.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#EdgeCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#EdgeCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EdgeCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EdgeCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EdgeCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EdgeCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EdgeCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EdgeCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EdgeCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EdgeCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EdgeCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EdgeCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EdgeCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EdgeCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EdgeCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`XScaleFactor`](#EdgeCrack.XScaleFactor)                                                                           | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#EdgeCrack.YScaleFactor)                                                                           | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#EdgeCrack.ZScaleFactor)                                                                           | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#EdgeCrack.CircumferentialDivisions)                                                   | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#EdgeCrack.CrackFrontDivisions)                                                             | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#EdgeCrack.GrowthRate)                                                                               | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#EdgeCrack.MeshContours)                                                                           | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#EdgeCrack.SolutionContours)                                                                   | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#EdgeCrack.Contact1Nodes)                                                                         | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#EdgeCrack.CrackFrontNodes)                                                                     | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#EdgeCrack.BottomFaceNodes)                                                                     | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#EdgeCrack.TopFaceNodes)                                                                           | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#EdgeCrack.Target1Nodes)                                                                           | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#EdgeCrack.FractureAffectedZoneHeight)                                               | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#EdgeCrack.FrontElementSize)                                                                   | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#EdgeCrack.LargestContourRadius)                                                           | Gets or sets the LargestContourRadius.                        |
| [`Depth`](#EdgeCrack.Depth)                                                                                         | Gets or sets the Depth.                                       |
| [`EndWidth`](#EdgeCrack.EndWidth)                                                                                   | Gets or sets the EndWidth.                                    |
| [`MidWidth`](#EdgeCrack.MidWidth)                                                                                   | Gets or sets the MidWidth.                                    |
| [`StartWidth`](#EdgeCrack.StartWidth)                                                                               | Gets or sets the StartWidth.                                  |
| [`FractureAffectedZone`](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone)          | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#EdgeCrack.CrackShape)                                                                               | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#EdgeCrack.ContactPairsNodes)                                                                 | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#EdgeCrack.CrackFacesNodes)                                                                     | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#EdgeCrack.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#EdgeCrack.Location)                                                                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#EdgeCrack.CrackID)                                                                                     | Gets the CrackID.                                             |
| [`Children`](#EdgeCrack.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#EdgeCrack.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#EdgeCrack.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#EdgeCrack.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#EdgeCrack.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EdgeCrack.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EdgeCrack.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import EdgeCrack
```

## Property detail

### *property* EdgeCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Depth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.EndWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.MidWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.StartWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EdgeCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EdgeCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### EdgeCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EdgeCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
