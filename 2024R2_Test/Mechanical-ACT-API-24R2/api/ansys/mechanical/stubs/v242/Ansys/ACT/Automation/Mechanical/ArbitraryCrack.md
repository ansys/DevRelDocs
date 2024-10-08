# `ArbitraryCrack`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ArbitraryCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ArbitraryCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ArbitraryCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ArbitraryCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ArbitraryCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ArbitraryCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ArbitraryCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ArbitraryCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ArbitraryCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ArbitraryCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ArbitraryCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ArbitraryCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ArbitraryCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ArbitraryCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ArbitraryCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ArbitraryCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ArbitraryCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ArbitraryCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ArbitraryCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BottomFaceNodes`](#ArbitraryCrack.BottomFaceNodes)                   | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#ArbitraryCrack.Children)                                 | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#ArbitraryCrack.CircumferentialDivisions) | Gets or sets the CircumferentialDivisions.                    |
| [`Comments`](#ArbitraryCrack.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#ArbitraryCrack.CoordinateSystem)                 | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#ArbitraryCrack.CrackFacesNodes)                   | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontNodes`](#ArbitraryCrack.CrackFrontNodes)                   | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#ArbitraryCrack.CrackID)                                   | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#ArbitraryCrack.CrackMeshMethod)                   | Gets the CrackMeshMethod.                                     |
| [`CrackShape`](#ArbitraryCrack.CrackShape)                             | Gets the CrackShape.                                          |
| [`CrackSourceType`](#ArbitraryCrack.CrackSourceType)                   | Gets the CrackSourceType.                                     |
| [`CrackSurfaceLocation`](#ArbitraryCrack.CrackSurfaceLocation)         | Gets or sets the CrackSurfaceLocation.                        |
| [`DataModelObjectCategory`](#ArbitraryCrack.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ArbitraryCrack.Figures)                                   | Gets the list of associated figures.                          |
| [`FrontElementSize`](#ArbitraryCrack.FrontElementSize)                 | Gets or sets the FrontElementSize.                            |
| [`GrowthRate`](#ArbitraryCrack.GrowthRate)                             | Gets or sets the GrowthRate.                                  |
| [`Images`](#ArbitraryCrack.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#ArbitraryCrack.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#ArbitraryCrack.LargestContourRadius)         | Gets or sets the LargestContourRadius.                        |
| [`Location`](#ArbitraryCrack.Location)                                 | Gets or sets the Location.                                    |
| [`MeshContours`](#ArbitraryCrack.MeshContours)                         | Gets or sets the MeshContours.                                |
| [`Properties`](#ArbitraryCrack.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ArbitraryCrack.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#ArbitraryCrack.SolutionContours)                 | Gets or sets the SolutionContours.                            |
| [`Suppressed`](#ArbitraryCrack.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TopFaceNodes`](#ArbitraryCrack.TopFaceNodes)                         | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#ArbitraryCrack.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#ArbitraryCrack.XScaleFactor)                         | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#ArbitraryCrack.YScaleFactor)                         | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#ArbitraryCrack.ZScaleFactor)                         | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="ArbitraryCrack.BottomFaceNodes"></a>

### *property* ArbitraryCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Children"></a>

### *property* ArbitraryCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CircumferentialDivisions"></a>

### *property* ArbitraryCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Comments"></a>

### *property* ArbitraryCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CoordinateSystem"></a>

### *property* ArbitraryCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackFacesNodes"></a>

### *property* ArbitraryCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackFrontNodes"></a>

### *property* ArbitraryCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackID"></a>

### *property* ArbitraryCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackMeshMethod"></a>

### *property* ArbitraryCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackShape"></a>

### *property* ArbitraryCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackSourceType"></a>

### *property* ArbitraryCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CrackSurfaceLocation"></a>

### *property* ArbitraryCrack.CrackSurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.DataModelObjectCategory"></a>

### *property* ArbitraryCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Figures"></a>

### *property* ArbitraryCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.FrontElementSize"></a>

### *property* ArbitraryCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GrowthRate"></a>

### *property* ArbitraryCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Images"></a>

### *property* ArbitraryCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.InternalObject"></a>

### *property* ArbitraryCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.LargestContourRadius"></a>

### *property* ArbitraryCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Location"></a>

### *property* ArbitraryCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.MeshContours"></a>

### *property* ArbitraryCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Properties"></a>

### *property* ArbitraryCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ReadOnly"></a>

### *property* ArbitraryCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.SolutionContours"></a>

### *property* ArbitraryCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Suppressed"></a>

### *property* ArbitraryCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.TopFaceNodes"></a>

### *property* ArbitraryCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.VisibleProperties"></a>

### *property* ArbitraryCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.XScaleFactor"></a>

### *property* ArbitraryCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.YScaleFactor"></a>

### *property* ArbitraryCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.ZScaleFactor"></a>

### *property* ArbitraryCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ArbitraryCrack.Activate"></a>

### ArbitraryCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddCommandSnippet"></a>

### ArbitraryCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddComment"></a>

### ArbitraryCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddFigure"></a>

### ArbitraryCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.AddImage"></a>

### ArbitraryCrack.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CopyTo"></a>

### ArbitraryCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.CreateParameter"></a>

### ArbitraryCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Delete"></a>

### ArbitraryCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.Duplicate"></a>

### ArbitraryCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetChildren"></a>

### ArbitraryCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GetParameter"></a>

### ArbitraryCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GroupAllSimilarChildren"></a>

### ArbitraryCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.GroupSimilarObjects"></a>

### ArbitraryCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.PropertyByAPIName"></a>

### ArbitraryCrack.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.PropertyByName"></a>

### ArbitraryCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ArbitraryCrack.RemoveParameter"></a>

### ArbitraryCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

