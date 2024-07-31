# `PreContactTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PreContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PreContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddInitialInformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddInitialInformation)                 | Creates a new ContactDataTable                                                    |
| [`AddGap`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddGap)                                               | Creates a new ContactGap                                                          |
| [`AddPenetration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddPenetration)                               | Creates a new ContactPenetration                                                  |
| [`AddStatus`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddStatus)                                         | Creates a new ContactStatus                                                       |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.ClearGeneratedData)                       | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.EvaluateAllResults)                       | Run the EvaluateAllResults action.                                                |
| [`GenerateInitialContactResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.GenerateInitialContactResults) | Run the GenerateInitialContactResults action.                                     |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Delete)                                               | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddComment)                                       | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddFigure)                                         | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.AddImage)                                           | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Activate)                                           | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.CopyTo)                                               | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Duplicate)                                         | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.PropertyByName)                               | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.PropertyByAPIName)                         | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.CreateParameter)                             | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.GetParameter)                                   | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Location)                               | Gets or sets the Location.                                    |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/PreContactTool.md#PreContactTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PreContactTool.InternalObject"></a>

### *property* PreContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.DataModelObjectCategory"></a>

### *property* PreContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ScopingMethod"></a>

### *property* PreContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Location"></a>

### *property* PreContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Children"></a>

### *property* PreContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Comments"></a>

### *property* PreContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Figures"></a>

### *property* PreContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Images"></a>

### *property* PreContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PreContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Properties"></a>

### *property* PreContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.VisibleProperties"></a>

### *property* PreContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PreContactTool.AddInitialInformation"></a>

### PreContactTool.AddInitialInformation()

Creates a new ContactDataTable

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddGap"></a>

### PreContactTool.AddGap()

Creates a new ContactGap

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddPenetration"></a>

### PreContactTool.AddPenetration()

Creates a new ContactPenetration

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddStatus"></a>

### PreContactTool.AddStatus()

Creates a new ContactStatus

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.ClearGeneratedData"></a>

### PreContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.EvaluateAllResults"></a>

### PreContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GenerateInitialContactResults"></a>

### PreContactTool.GenerateInitialContactResults()

Run the GenerateInitialContactResults action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Delete"></a>

### PreContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetChildren"></a>

### PreContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PreContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddComment"></a>

### PreContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddFigure"></a>

### PreContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.AddImage"></a>

### PreContactTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Activate"></a>

### PreContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CopyTo"></a>

### PreContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.Duplicate"></a>

### PreContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupAllSimilarChildren"></a>

### PreContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GroupSimilarObjects"></a>

### PreContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByName"></a>

### PreContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.PropertyByAPIName"></a>

### PreContactTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.CreateParameter"></a>

### PreContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.GetParameter"></a>

### PreContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PreContactTool.RemoveParameter"></a>

### PreContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

