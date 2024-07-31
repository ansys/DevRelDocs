# `CornerCrack`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CornerCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CornerCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#CornerCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#CornerCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CornerCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CornerCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CornerCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CornerCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CornerCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CornerCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CornerCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CornerCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CornerCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CornerCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CornerCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CornerCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CornerCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#CornerCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#CornerCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#CornerCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#CornerCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#CornerCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#CornerCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#CornerCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#CornerCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#CornerCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#CornerCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#CornerCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#CornerCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#CornerCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#CornerCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#CornerCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#CornerCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#CornerCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#CornerCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`FractureAffectedZone`](#CornerCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](#CornerCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#CornerCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#CornerCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#CornerCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#CornerCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#CornerCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#CornerCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](#CornerCrack.Location)                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#CornerCrack.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`CrackID`](#CornerCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`Children`](#CornerCrack.Children)                                     | Gets the list of children.                                    |
| [`Comments`](#CornerCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Figures`](#CornerCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`Images`](#CornerCrack.Images)                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#CornerCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CornerCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CornerCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CornerCrack.InternalObject"></a>

### *property* CornerCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.XScaleFactor"></a>

### *property* CornerCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.YScaleFactor"></a>

### *property* CornerCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ZScaleFactor"></a>

### *property* CornerCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CircumferentialDivisions"></a>

### *property* CornerCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFrontDivisions"></a>

### *property* CornerCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GrowthRate"></a>

### *property* CornerCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MeshContours"></a>

### *property* CornerCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.SolutionContours"></a>

### *property* CornerCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Contact1Nodes"></a>

### *property* CornerCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFrontNodes"></a>

### *property* CornerCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.BottomFaceNodes"></a>

### *property* CornerCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.TopFaceNodes"></a>

### *property* CornerCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Target1Nodes"></a>

### *property* CornerCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FractureAffectedZoneHeight"></a>

### *property* CornerCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FrontElementSize"></a>

### *property* CornerCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.LargestContourRadius"></a>

### *property* CornerCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MajorRadius"></a>

### *property* CornerCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.MinorRadius"></a>

### *property* CornerCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.FractureAffectedZone"></a>

### *property* CornerCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackMeshMethod"></a>

### *property* CornerCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackShape"></a>

### *property* CornerCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackSourceType"></a>

### *property* CornerCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ContactPairsNodes"></a>

### *property* CornerCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackFacesNodes"></a>

### *property* CornerCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Suppressed"></a>

### *property* CornerCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CoordinateSystem"></a>

### *property* CornerCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Location"></a>

### *property* CornerCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.DataModelObjectCategory"></a>

### *property* CornerCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CrackID"></a>

### *property* CornerCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Children"></a>

### *property* CornerCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Comments"></a>

### *property* CornerCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Figures"></a>

### *property* CornerCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Images"></a>

### *property* CornerCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.ReadOnly"></a>

### *property* CornerCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CornerCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Properties"></a>

### *property* CornerCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.VisibleProperties"></a>

### *property* CornerCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CornerCrack.AddCommandSnippet"></a>

### CornerCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Delete"></a>

### CornerCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GetChildren"></a>

### CornerCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CornerCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddComment"></a>

### CornerCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddFigure"></a>

### CornerCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.AddImage"></a>

### CornerCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Activate"></a>

### CornerCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CopyTo"></a>

### CornerCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.Duplicate"></a>

### CornerCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GroupAllSimilarChildren"></a>

### CornerCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GroupSimilarObjects"></a>

### CornerCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.PropertyByName"></a>

### CornerCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.PropertyByAPIName"></a>

### CornerCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.CreateParameter"></a>

### CornerCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.GetParameter"></a>

### CornerCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CornerCrack.RemoveParameter"></a>

### CornerCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

