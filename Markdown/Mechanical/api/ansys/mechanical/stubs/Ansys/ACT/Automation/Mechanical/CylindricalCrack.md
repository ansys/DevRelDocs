# CylindricalCrack

### *class* CylindricalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CylindricalCrack.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#CylindricalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CylindricalCrack
```

## Property detail

### *property* CylindricalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CylindricalCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### CylindricalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CylindricalCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
