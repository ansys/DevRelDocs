# `CylindricalCrack`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CylindricalCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CylindricalCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CylindricalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CylindricalCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#CylindricalCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#CylindricalCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CylindricalCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CylindricalCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CylindricalCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CylindricalCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CylindricalCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CylindricalCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CylindricalCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CylindricalCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CylindricalCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CylindricalCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CylindricalCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CylindricalCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CylindricalCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BottomFaceNodes`](#CylindricalCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`Children`](#CylindricalCrack.Children)                                     | Gets the list of children.                                    |
| [`CircumferentialDivisions`](#CylindricalCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`Comments`](#CylindricalCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Contact1Nodes`](#CylindricalCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`ContactPairsNodes`](#CylindricalCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CoordinateSystem`](#CylindricalCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`CrackFacesNodes`](#CylindricalCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`CrackFrontDivisions`](#CylindricalCrack.CrackFrontDivisions)               | Gets or sets the CrackFrontDivisions.                         |
| [`CrackFrontNodes`](#CylindricalCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`CrackID`](#CylindricalCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`CrackMeshMethod`](#CylindricalCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](#CylindricalCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](#CylindricalCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`DataModelObjectCategory`](#CylindricalCrack.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CylindricalCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`FractureAffectedZone`](#CylindricalCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`FractureAffectedZoneHeight`](#CylindricalCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`FrontElementSize`](#CylindricalCrack.FrontElementSize)                     | Gets or sets the FrontElementSize.                            |
| [`GrowthRate`](#CylindricalCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`Height`](#CylindricalCrack.Height)                                         | Gets or sets the Height.                                      |
| [`Images`](#CylindricalCrack.Images)                                         | Gets the list of associated images.                           |
| [`InternalObject`](#CylindricalCrack.InternalObject)                         | Gets the internal object. For advanced usage only.            |
| [`LargestContourRadius`](#CylindricalCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`Location`](#CylindricalCrack.Location)                                     | Gets or sets the Location.                                    |
| [`MajorRadius`](#CylindricalCrack.MajorRadius)                               | Gets or sets the MajorRadius.                                 |
| [`MeshContours`](#CylindricalCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`MinorRadius`](#CylindricalCrack.MinorRadius)                               | Gets or sets the MinorRadius.                                 |
| [`Properties`](#CylindricalCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CylindricalCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`SolutionContours`](#CylindricalCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Suppressed`](#CylindricalCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`Target1Nodes`](#CylindricalCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`TopFaceNodes`](#CylindricalCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`VisibleProperties`](#CylindricalCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |
| [`XScaleFactor`](#CylindricalCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](#CylindricalCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](#CylindricalCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |

<a id="property-detail"></a>

## Property detail

<a id="CylindricalCrack.BottomFaceNodes"></a>

### *property* CylindricalCrack.BottomFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Children"></a>

### *property* CylindricalCrack.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CircumferentialDivisions"></a>

### *property* CylindricalCrack.CircumferentialDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Comments"></a>

### *property* CylindricalCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Contact1Nodes"></a>

### *property* CylindricalCrack.Contact1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ContactPairsNodes"></a>

### *property* CylindricalCrack.ContactPairsNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CoordinateSystem"></a>

### *property* CylindricalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFacesNodes"></a>

### *property* CylindricalCrack.CrackFacesNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontDivisions"></a>

### *property* CylindricalCrack.CrackFrontDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackFrontNodes"></a>

### *property* CylindricalCrack.CrackFrontNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackID"></a>

### *property* CylindricalCrack.CrackID *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackMeshMethod"></a>

### *property* CylindricalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackShape"></a>

### *property* CylindricalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CrackSourceType"></a>

### *property* CylindricalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.DataModelObjectCategory"></a>

### *property* CylindricalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Figures"></a>

### *property* CylindricalCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZone"></a>

### *property* CylindricalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FractureAffectedZoneHeight"></a>

### *property* CylindricalCrack.FractureAffectedZoneHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.FrontElementSize"></a>

### *property* CylindricalCrack.FrontElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GrowthRate"></a>

### *property* CylindricalCrack.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Height"></a>

### *property* CylindricalCrack.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Height.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Images"></a>

### *property* CylindricalCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.InternalObject"></a>

### *property* CylindricalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.LargestContourRadius"></a>

### *property* CylindricalCrack.LargestContourRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Location"></a>

### *property* CylindricalCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MajorRadius"></a>

### *property* CylindricalCrack.MajorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MeshContours"></a>

### *property* CylindricalCrack.MeshContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.MinorRadius"></a>

### *property* CylindricalCrack.MinorRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Properties"></a>

### *property* CylindricalCrack.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ReadOnly"></a>

### *property* CylindricalCrack.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.SolutionContours"></a>

### *property* CylindricalCrack.SolutionContours *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Suppressed"></a>

### *property* CylindricalCrack.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Target1Nodes"></a>

### *property* CylindricalCrack.Target1Nodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.TopFaceNodes"></a>

### *property* CylindricalCrack.TopFaceNodes *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.VisibleProperties"></a>

### *property* CylindricalCrack.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.XScaleFactor"></a>

### *property* CylindricalCrack.XScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.YScaleFactor"></a>

### *property* CylindricalCrack.YScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.ZScaleFactor"></a>

### *property* CylindricalCrack.ZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CylindricalCrack.Activate"></a>

### CylindricalCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddCommandSnippet"></a>

### CylindricalCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddComment"></a>

### CylindricalCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddFigure"></a>

### CylindricalCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.AddImage"></a>

### CylindricalCrack.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CopyTo"></a>

### CylindricalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.CreateParameter"></a>

### CylindricalCrack.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Delete"></a>

### CylindricalCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.Duplicate"></a>

### CylindricalCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetChildren"></a>

### CylindricalCrack.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GetParameter"></a>

### CylindricalCrack.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupAllSimilarChildren"></a>

### CylindricalCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.GroupSimilarObjects"></a>

### CylindricalCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByAPIName"></a>

### CylindricalCrack.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.PropertyByName"></a>

### CylindricalCrack.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CylindricalCrack.RemoveParameter"></a>

### CylindricalCrack.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

