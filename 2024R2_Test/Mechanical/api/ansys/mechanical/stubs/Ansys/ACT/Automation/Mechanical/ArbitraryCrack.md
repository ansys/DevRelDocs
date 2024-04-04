# ArbitraryCrack

### *class* ArbitraryCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ArbitraryCrack.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#ArbitraryCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ArbitraryCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ArbitraryCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ArbitraryCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ArbitraryCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ArbitraryCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ArbitraryCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ArbitraryCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ArbitraryCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ArbitraryCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ArbitraryCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ArbitraryCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ArbitraryCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ArbitraryCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ArbitraryCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`XScaleFactor`](#ArbitraryCrack.XScaleFactor)                                                                      | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#ArbitraryCrack.YScaleFactor)                                                                      | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#ArbitraryCrack.ZScaleFactor)                                                                      | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#ArbitraryCrack.CircumferentialDivisions)                                              | Gets or sets the CircumferentialDivisions.                    |
| [`GrowthRate`](#ArbitraryCrack.GrowthRate)                                                                          | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#ArbitraryCrack.MeshContours)                                                                      | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#ArbitraryCrack.SolutionContours)                                                              | Gets or sets the SolutionContours.                            |
| [`CrackFrontNodes`](#ArbitraryCrack.CrackFrontNodes)                                                                | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#ArbitraryCrack.BottomFaceNodes)                                                                | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#ArbitraryCrack.TopFaceNodes)                                                                      | Gets or sets the TopFaceNodes.                                |
| [`FrontElementSize`](#ArbitraryCrack.FrontElementSize)                                                              | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#ArbitraryCrack.LargestContourRadius)                                                      | Gets or sets the LargestContourRadius.                        |
| [`CrackMeshMethod`](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod)                         | Gets the CrackMeshMethod.                                     |
| [`CrackShape`](#ArbitraryCrack.CrackShape)                                                                          | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType)                         | Gets the CrackSourceType.                                     |
| [`CrackFacesNodes`](#ArbitraryCrack.CrackFacesNodes)                                                                | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#ArbitraryCrack.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`CrackSurfaceLocation`](#ArbitraryCrack.CrackSurfaceLocation)                                                      | Gets or sets the CrackSurfaceLocation.                        |
| [`Location`](#ArbitraryCrack.Location)                                                                              | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#ArbitraryCrack.CrackID)                                                                                | Gets the CrackID.                                             |
| [`Children`](#ArbitraryCrack.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#ArbitraryCrack.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Figures`](#ArbitraryCrack.Figures)                                                                                | Gets the list of associated figures.                          |
| [`Images`](#ArbitraryCrack.Images)                                                                                  | Gets the list of associated images.                           |
| [`ReadOnly`](#ArbitraryCrack.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ArbitraryCrack.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ArbitraryCrack.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ArbitraryCrack
```

## Property detail

### *property* ArbitraryCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackSurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSurfaceLocation.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ArbitraryCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ArbitraryCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ArbitraryCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
