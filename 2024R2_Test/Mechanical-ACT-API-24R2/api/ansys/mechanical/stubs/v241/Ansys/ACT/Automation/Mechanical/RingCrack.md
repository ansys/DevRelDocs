# `RingCrack`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RingCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RingCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`XScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.XScaleFactor)                             | Gets or sets the XScaleFactor.                                |
| [`YScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.YScaleFactor)                             | Gets or sets the YScaleFactor.                                |
| [`ZScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.ZScaleFactor)                             | Gets or sets the ZScaleFactor.                                |
| [`CircumferentialDivisions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CircumferentialDivisions)     | Gets or sets the CircumferentialDivisions.                    |
| [`OuterCrackFrontDivisions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.OuterCrackFrontDivisions)     | Gets or sets the OuterCrackFrontDivisions.                    |
| [`GrowthRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.GrowthRate)                                 | Gets or sets the GrowthRate.                                  |
| [`InnerCrackFrontDivisions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.InnerCrackFrontDivisions)     | Gets or sets the InnerCrackFrontDivisions.                    |
| [`MeshContours`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.MeshContours)                             | Gets or sets the MeshContours.                                |
| [`SolutionContours`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.SolutionContours)                     | Gets or sets the SolutionContours.                            |
| [`Contact1Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Contact1Nodes)                           | Gets or sets the Contact1Nodes.                               |
| [`CrackFrontNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackFrontNodes)                       | Gets or sets the CrackFrontNodes.                             |
| [`BottomFaceNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.BottomFaceNodes)                       | Gets or sets the BottomFaceNodes.                             |
| [`TopFaceNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.TopFaceNodes)                             | Gets or sets the TopFaceNodes.                                |
| [`Target1Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Target1Nodes)                             | Gets or sets the Target1Nodes.                                |
| [`FractureAffectedZoneHeight`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.FractureAffectedZoneHeight) | Gets or sets the FractureAffectedZoneHeight.                  |
| [`OuterFrontElementSize`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.OuterFrontElementSize)           | Gets or sets the OuterFrontElementSize.                       |
| [`LargestContourRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.LargestContourRadius)             | Gets or sets the LargestContourRadius.                        |
| [`InnerMajorRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.InnerMajorRadius)                     | Gets or sets the InnerMajorRadius.                            |
| [`InnerMinorRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.InnerMinorRadius)                     | Gets or sets the InnerMinorRadius.                            |
| [`OuterMajorRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.OuterMajorRadius)                     | Gets or sets the OuterMajorRadius.                            |
| [`OuterMinorRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.OuterMinorRadius)                     | Gets or sets the OuterMinorRadius.                            |
| [`InnerFrontElementSize`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.InnerFrontElementSize)           | Gets or sets the InnerFrontElementSize.                       |
| [`FractureAffectedZone`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.FractureAffectedZone)             | Gets or sets the FractureAffectedZone.                        |
| [`CrackMeshMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackMeshMethod)                       | Gets or sets the CrackMeshMethod.                             |
| [`CrackShape`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackShape)                                 | Gets the CrackShape.                                          |
| [`CrackSourceType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackSourceType)                       | Gets the CrackSourceType.                                     |
| [`ContactPairsNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.ContactPairsNodes)                   | Gets or sets the ContactPairsNodes.                           |
| [`CrackFacesNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackFacesNodes)                       | Gets or sets the CrackFacesNodes.                             |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Suppressed)                                 | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CoordinateSystem)                     | Gets or sets the CoordinateSystem.                            |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Location)                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.DataModelObjectCategory)       | Gets the current DataModelObject's category.                  |
| [`CrackID`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.CrackID)                                       | Gets the CrackID.                                             |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Children)                                     | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Comments)                                     | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Figures)                                       | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Images)                                         | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.ReadOnly)                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.Properties)                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/RingCrack.md#RingCrack.VisibleProperties)                   | Gets the list of properties that are visible for this object. |

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

### *property* RingCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackMeshMethod"></a>

### *property* RingCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackShape"></a>

### *property* RingCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.CrackSourceType"></a>

### *property* RingCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* RingCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Location"></a>

### *property* RingCrack.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.DataModelObjectCategory"></a>

### *property* RingCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

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

### *property* RingCrack.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Figures"></a>

### *property* RingCrack.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RingCrack.Images"></a>

### *property* RingCrack.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### RingCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

