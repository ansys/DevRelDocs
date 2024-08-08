# `EllipticalCrack`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.EllipticalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EllipticalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#EllipticalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#EllipticalCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EllipticalCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EllipticalCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EllipticalCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EllipticalCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EllipticalCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EllipticalCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EllipticalCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EllipticalCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EllipticalCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EllipticalCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EllipticalCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EllipticalCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EllipticalCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](#EllipticalCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#EllipticalCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#EllipticalCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](#EllipticalCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`CrackFrontDivisions`](#EllipticalCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`GrowthRate`](#EllipticalCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`MeshContours`](#EllipticalCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`SolutionContours`](#EllipticalCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](#EllipticalCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](#EllipticalCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](#EllipticalCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](#EllipticalCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](#EllipticalCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](#EllipticalCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#EllipticalCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`LargestContourRadius`](#EllipticalCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`MajorRadius`](#EllipticalCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MinorRadius`](#EllipticalCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`FractureAffectedZone`](#EllipticalCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](#EllipticalCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#EllipticalCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#EllipticalCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](#EllipticalCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](#EllipticalCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](#EllipticalCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](#EllipticalCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](#EllipticalCrack.Location)                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#EllipticalCrack.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                  |
| [`CrackID`](#EllipticalCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`Children`](#EllipticalCrack.Children)                                     | Gets the list of children.                                    |
| [`Comments`](#EllipticalCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Figures`](#EllipticalCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`Images`](#EllipticalCrack.Images)                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#EllipticalCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EllipticalCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#EllipticalCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="EllipticalCrack.InternalObject"></a>

### *property* EllipticalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.XScaleFactor"></a>

### *property* EllipticalCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.YScaleFactor"></a>

### *property* EllipticalCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ZScaleFactor"></a>

### *property* EllipticalCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CircumferentialDivisions"></a>

### *property* EllipticalCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFrontDivisions"></a>

### *property* EllipticalCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GrowthRate"></a>

### *property* EllipticalCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MeshContours"></a>

### *property* EllipticalCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.SolutionContours"></a>

### *property* EllipticalCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Contact1Nodes"></a>

### *property* EllipticalCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFrontNodes"></a>

### *property* EllipticalCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.BottomFaceNodes"></a>

### *property* EllipticalCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.TopFaceNodes"></a>

### *property* EllipticalCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Target1Nodes"></a>

### *property* EllipticalCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FractureAffectedZoneHeight"></a>

### *property* EllipticalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FrontElementSize"></a>

### *property* EllipticalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.LargestContourRadius"></a>

### *property* EllipticalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MajorRadius"></a>

### *property* EllipticalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.MinorRadius"></a>

### *property* EllipticalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.FractureAffectedZone"></a>

### *property* EllipticalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../../../v241/Ansys/Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackMeshMethod"></a>

### *property* EllipticalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackShape"></a>

### *property* EllipticalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackSourceType"></a>

### *property* EllipticalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ContactPairsNodes"></a>

### *property* EllipticalCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackFacesNodes"></a>

### *property* EllipticalCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Suppressed"></a>

### *property* EllipticalCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CoordinateSystem"></a>

### *property* EllipticalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Location"></a>

### *property* EllipticalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.DataModelObjectCategory"></a>

### *property* EllipticalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CrackID"></a>

### *property* EllipticalCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Children"></a>

### *property* EllipticalCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Comments"></a>

### *property* EllipticalCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Figures"></a>

### *property* EllipticalCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Images"></a>

### *property* EllipticalCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.ReadOnly"></a>

### *property* EllipticalCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EllipticalCrack.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Properties"></a>

### *property* EllipticalCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.VisibleProperties"></a>

### *property* EllipticalCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EllipticalCrack.AddCommandSnippet"></a>

### EllipticalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Delete"></a>

### EllipticalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetChildren"></a>

### EllipticalCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EllipticalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddComment"></a>

### EllipticalCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddFigure"></a>

### EllipticalCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.AddImage"></a>

### EllipticalCrack.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Activate"></a>

### EllipticalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CopyTo"></a>

### EllipticalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.Duplicate"></a>

### EllipticalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GroupAllSimilarChildren"></a>

### EllipticalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GroupSimilarObjects"></a>

### EllipticalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.PropertyByName"></a>

### EllipticalCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.PropertyByAPIName"></a>

### EllipticalCrack.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.CreateParameter"></a>

### EllipticalCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.GetParameter"></a>

### EllipticalCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EllipticalCrack.RemoveParameter"></a>

### EllipticalCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

