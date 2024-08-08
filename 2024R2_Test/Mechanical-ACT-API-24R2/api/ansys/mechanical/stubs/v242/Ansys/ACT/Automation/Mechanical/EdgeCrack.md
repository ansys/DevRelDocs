# `EdgeCrack`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.EdgeCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EdgeCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#EdgeCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
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

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#EdgeCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#EdgeCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#EdgeCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#EdgeCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#EdgeCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#EdgeCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#EdgeCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#EdgeCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#EdgeCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#EdgeCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#EdgeCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#EdgeCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#EdgeCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#EdgeCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#EdgeCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#EdgeCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Depth`](#EdgeCrack.Depth)                                           | Gets or sets the Depth.                                       |
| [`EndWidth`](#EdgeCrack.EndWidth)                                     | Gets or sets the EndWidth.                                    |
| [`MidWidth`](#EdgeCrack.MidWidth)                                     | Gets or sets the MidWidth.                                    |
| [`StartWidth`](#EdgeCrack.StartWidth)                                 | Gets or sets the StartWidth.                                  |
| [`FractureAffectedZone`](#EdgeCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](#EdgeCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#EdgeCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#EdgeCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#EdgeCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#EdgeCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#EdgeCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#EdgeCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](#EdgeCrack.Location)                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#EdgeCrack.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                  |
| [`CrackID`](#EdgeCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`Children`](#EdgeCrack.Children)                                     | Gets the list of children.                                    |
| [`Comments`](#EdgeCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Figures`](#EdgeCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`Images`](#EdgeCrack.Images)                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#EdgeCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EdgeCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EdgeCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="EdgeCrack.InternalObject"></a>

### *property* EdgeCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.XScaleFactor"></a>

### *property* EdgeCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.YScaleFactor"></a>

### *property* EdgeCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ZScaleFactor"></a>

### *property* EdgeCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CircumferentialDivisions"></a>

### *property* EdgeCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFrontDivisions"></a>

### *property* EdgeCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GrowthRate"></a>

### *property* EdgeCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.MeshContours"></a>

### *property* EdgeCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.SolutionContours"></a>

### *property* EdgeCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Contact1Nodes"></a>

### *property* EdgeCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFrontNodes"></a>

### *property* EdgeCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.BottomFaceNodes"></a>

### *property* EdgeCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.TopFaceNodes"></a>

### *property* EdgeCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Target1Nodes"></a>

### *property* EdgeCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FractureAffectedZoneHeight"></a>

### *property* EdgeCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FrontElementSize"></a>

### *property* EdgeCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.LargestContourRadius"></a>

### *property* EdgeCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Depth"></a>

### *property* EdgeCrack.Depth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.EndWidth"></a>

### *property* EdgeCrack.EndWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.MidWidth"></a>

### *property* EdgeCrack.MidWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.StartWidth"></a>

### *property* EdgeCrack.StartWidth *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FractureAffectedZone"></a>

### *property* EdgeCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackMeshMethod"></a>

### *property* EdgeCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackShape"></a>

### *property* EdgeCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackSourceType"></a>

### *property* EdgeCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ContactPairsNodes"></a>

### *property* EdgeCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFacesNodes"></a>

### *property* EdgeCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Suppressed"></a>

### *property* EdgeCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CoordinateSystem"></a>

### *property* EdgeCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Location"></a>

### *property* EdgeCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.DataModelObjectCategory"></a>

### *property* EdgeCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackID"></a>

### *property* EdgeCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Children"></a>

### *property* EdgeCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Comments"></a>

### *property* EdgeCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Figures"></a>

### *property* EdgeCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Images"></a>

### *property* EdgeCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ReadOnly"></a>

### *property* EdgeCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EdgeCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Properties"></a>

### *property* EdgeCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.VisibleProperties"></a>

### *property* EdgeCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EdgeCrack.AddCommandSnippet"></a>

### EdgeCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Delete"></a>

### EdgeCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetChildren"></a>

### EdgeCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EdgeCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddComment"></a>

### EdgeCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddFigure"></a>

### EdgeCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddImage"></a>

### EdgeCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Activate"></a>

### EdgeCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CopyTo"></a>

### EdgeCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Duplicate"></a>

### EdgeCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GroupAllSimilarChildren"></a>

### EdgeCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GroupSimilarObjects"></a>

### EdgeCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.PropertyByName"></a>

### EdgeCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.PropertyByAPIName"></a>

### EdgeCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CreateParameter"></a>

### EdgeCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetParameter"></a>

### EdgeCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.RemoveParameter"></a>

### EdgeCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

