# `ThroughCrack`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ThroughCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ThroughCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ThroughCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ThroughCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ThroughCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ThroughCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ThroughCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ThroughCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ThroughCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ThroughCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ThroughCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ThroughCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ThroughCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ThroughCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ThroughCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThroughCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ThroughCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ThroughCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ThroughCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BottomFaceNodes`](#ThroughCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#ThroughCrack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#ThroughCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`Comments`](#ThroughCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#ThroughCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#ThroughCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](#ThroughCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#ThroughCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#ThroughCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#ThroughCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#ThroughCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#ThroughCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#ThroughCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#ThroughCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#ThroughCrack.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`Depth`](#ThroughCrack.Depth)                                           | Gets or sets the Depth.                                       |
| [`EndWidth`](#ThroughCrack.EndWidth)                                     | Gets or sets the EndWidth.                                    |
| [`Figures`](#ThroughCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#ThroughCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#ThroughCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#ThroughCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`GrowthRate`](#ThroughCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`Images`](#ThroughCrack.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#ThroughCrack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#ThroughCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#ThroughCrack.Location)                                     | Gets or sets the Location.                                    |
| [`MeshContours`](#ThroughCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MidWidth`](#ThroughCrack.MidWidth)                                     | Gets or sets the MidWidth.                                    |
| [`Properties`](#ThroughCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ThroughCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#ThroughCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`StartWidth`](#ThroughCrack.StartWidth)                                 | Gets or sets the StartWidth.                                  |
| [`Suppressed`](#ThroughCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#ThroughCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TopFaceNodes`](#ThroughCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#ThroughCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#ThroughCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#ThroughCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#ThroughCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="ThroughCrack.BottomFaceNodes"></a>

### *property* ThroughCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Children"></a>

### *property* ThroughCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CircumferentialDivisions"></a>

### *property* ThroughCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Comments"></a>

### *property* ThroughCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Contact1Nodes"></a>

### *property* ThroughCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ContactPairsNodes"></a>

### *property* ThroughCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CoordinateSystem"></a>

### *property* ThroughCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFacesNodes"></a>

### *property* ThroughCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontDivisions"></a>

### *property* ThroughCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontNodes"></a>

### *property* ThroughCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackID"></a>

### *property* ThroughCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackMeshMethod"></a>

### *property* ThroughCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackShape"></a>

### *property* ThroughCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackSourceType"></a>

### *property* ThroughCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.DataModelObjectCategory"></a>

### *property* ThroughCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Depth"></a>

### *property* ThroughCrack.Depth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.EndWidth"></a>

### *property* ThroughCrack.EndWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Figures"></a>

### *property* ThroughCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZone"></a>

### *property* ThroughCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZoneHeight"></a>

### *property* ThroughCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FrontElementSize"></a>

### *property* ThroughCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GrowthRate"></a>

### *property* ThroughCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Images"></a>

### *property* ThroughCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.InternalObject"></a>

### *property* ThroughCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.LargestContourRadius"></a>

### *property* ThroughCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Location"></a>

### *property* ThroughCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MeshContours"></a>

### *property* ThroughCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MidWidth"></a>

### *property* ThroughCrack.MidWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Properties"></a>

### *property* ThroughCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ReadOnly"></a>

### *property* ThroughCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.SolutionContours"></a>

### *property* ThroughCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.StartWidth"></a>

### *property* ThroughCrack.StartWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Suppressed"></a>

### *property* ThroughCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Target1Nodes"></a>

### *property* ThroughCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.TopFaceNodes"></a>

### *property* ThroughCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.VisibleProperties"></a>

### *property* ThroughCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

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

<a id="method-detail"></a>

## Method detail

<a id="ThroughCrack.Activate"></a>

### ThroughCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddCommandSnippet"></a>

### ThroughCrack.AddCommandSnippet()

Creates a new CommandSnippet

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CopyTo"></a>

### ThroughCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CreateParameter"></a>

### ThroughCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Delete"></a>

### ThroughCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Duplicate"></a>

### ThroughCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetChildren"></a>

### ThroughCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetParameter"></a>

### ThroughCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupAllSimilarChildren"></a>

### ThroughCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupSimilarObjects"></a>

### ThroughCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByAPIName"></a>

### ThroughCrack.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByName"></a>

### ThroughCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.RemoveParameter"></a>

### ThroughCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

