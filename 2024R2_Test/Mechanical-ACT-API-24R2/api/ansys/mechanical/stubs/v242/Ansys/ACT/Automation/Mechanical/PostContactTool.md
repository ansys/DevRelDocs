# `PostContactTool`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.PostContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PostContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddFluidPressure`](#PostContactTool.AddFluidPressure)                           | Creates a new ContactFluidPressure                                                |
| [`AddFrictionalStress`](#PostContactTool.AddFrictionalStress)                     | Creates a new ContactFrictionalStress                                             |
| [`AddHeatFlux`](#PostContactTool.AddHeatFlux)                                     | Creates a new ContactHeatFlux                                                     |
| [`AddPressure`](#PostContactTool.AddPressure)                                     | Creates a new ContactPressure                                                     |
| [`AddSlidingDistance`](#PostContactTool.AddSlidingDistance)                       | Creates a new ContactSlidingDistance                                              |
| [`AddInitialInformation`](#PostContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
| [`AddGap`](#PostContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddPenetration`](#PostContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddStatus`](#PostContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](#PostContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#PostContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](#PostContactTool.GenerateInitialContactResults) | Generate Initial Contact Results and Mesh Parts                                   |
| [`Delete`](#PostContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PostContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](#PostContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](#PostContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`Activate`](#PostContactTool.Activate)                                           | Activate the current object.                                                      |
| [`CopyTo`](#PostContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PostContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PostContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PostContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PostContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PostContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`CreateParameter`](#PostContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PostContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PostContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#PostContactTool.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`ScopingMethod`](#PostContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Location`](#PostContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Children`](#PostContactTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PostContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#PostContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PostContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PostContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PostContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PostContactTool.InternalObject"></a>

### *property* PostContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.DataModelObjectCategory"></a>

### *property* PostContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.ScopingMethod"></a>

### *property* PostContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Location"></a>

### *property* PostContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Children"></a>

### *property* PostContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Comments"></a>

### *property* PostContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Figures"></a>

### *property* PostContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Images"></a>

### *property* PostContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PostContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Properties"></a>

### *property* PostContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.VisibleProperties"></a>

### *property* PostContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PostContactTool.AddFluidPressure"></a>

### PostContactTool.AddFluidPressure()

Creates a new ContactFluidPressure

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddFrictionalStress"></a>

### PostContactTool.AddFrictionalStress()

Creates a new ContactFrictionalStress

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddHeatFlux"></a>

### PostContactTool.AddHeatFlux()

Creates a new ContactHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddPressure"></a>

### PostContactTool.AddPressure()

Creates a new ContactPressure

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddSlidingDistance"></a>

### PostContactTool.AddSlidingDistance()

Creates a new ContactSlidingDistance

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddInitialInformation"></a>

### PostContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddGap"></a>

### PostContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddPenetration"></a>

### PostContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddStatus"></a>

### PostContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.ClearGeneratedData"></a>

### PostContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.EvaluateAllResults"></a>

### PostContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GenerateInitialContactResults"></a>

### PostContactTool.GenerateInitialContactResults()

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Delete"></a>

### PostContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GetChildren"></a>

### PostContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PostContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddComment"></a>

### PostContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddFigure"></a>

### PostContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.AddImage"></a>

### PostContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Activate"></a>

### PostContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.CopyTo"></a>

### PostContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.Duplicate"></a>

### PostContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GroupAllSimilarChildren"></a>

### PostContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GroupSimilarObjects"></a>

### PostContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.PropertyByName"></a>

### PostContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.PropertyByAPIName"></a>

### PostContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.CreateParameter"></a>

### PostContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.GetParameter"></a>

### PostContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PostContactTool.RemoveParameter"></a>

### PostContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

