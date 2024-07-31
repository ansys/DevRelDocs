# `ResponsePSDTool`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ResponsePSDTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResponsePSDTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`AddResponsePSD`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.AddResponsePSD)                   | Creates a new ResponsePSD                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`ClusteringFrequencyPoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.ClusteringFrequencyPoints)             | Gets or sets the ClusteringFrequencyPoints.                   |
| [`IncludeAllExcitationFrequencies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.IncludeAllExcitationFrequencies) | Gets or sets the IncludeAllExcitationFrequencies.             |
| [`IncludeUserDefinedFrequencies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.IncludeUserDefinedFrequencies)     | Gets or sets the IncludeUserDefinedFrequencies.               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#id0)                                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ResponsePSDTool.md#ResponsePSDTool.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ResponsePSDTool.InternalObject"></a>

### *property* ResponsePSDTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResponsePSDToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.ClusteringFrequencyPoints"></a>

### *property* ResponsePSDTool.ClusteringFrequencyPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusteringFrequencyPoints.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IncludeAllExcitationFrequencies"></a>

### *property* ResponsePSDTool.IncludeAllExcitationFrequencies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeAllExcitationFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.IncludeUserDefinedFrequencies"></a>

### *property* ResponsePSDTool.IncludeUserDefinedFrequencies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeUserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.DataModelObjectCategory"></a>

### *property* ResponsePSDTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Children"></a>

### *property* ResponsePSDTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Comments"></a>

### *property* ResponsePSDTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Figures"></a>

### *property* ResponsePSDTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Images"></a>

### *property* ResponsePSDTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResponsePSDTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Properties"></a>

### *property* ResponsePSDTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.VisibleProperties"></a>

### *property* ResponsePSDTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResponsePSDTool.EvaluateAllResults"></a>

### ResponsePSDTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddResponsePSD"></a>

### ResponsePSDTool.AddResponsePSD()

Creates a new ResponsePSD

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Delete"></a>

### ResponsePSDTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetChildren"></a>

### ResponsePSDTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResponsePSDTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddComment"></a>

### ResponsePSDTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddFigure"></a>

### ResponsePSDTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.AddImage"></a>

### ResponsePSDTool.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Activate"></a>

### ResponsePSDTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.CopyTo"></a>

### ResponsePSDTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.Duplicate"></a>

### ResponsePSDTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GroupAllSimilarChildren"></a>

### ResponsePSDTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GroupSimilarObjects"></a>

### ResponsePSDTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.PropertyByName"></a>

### ResponsePSDTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.PropertyByAPIName"></a>

### ResponsePSDTool.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.CreateParameter"></a>

### ResponsePSDTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.GetParameter"></a>

### ResponsePSDTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSDTool.RemoveParameter"></a>

### ResponsePSDTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

