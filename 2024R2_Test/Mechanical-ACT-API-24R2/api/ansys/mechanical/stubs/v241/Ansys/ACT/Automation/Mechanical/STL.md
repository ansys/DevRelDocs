# `STL`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.STL

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a STL.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportStl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.ExportStl)                             | Export STL data.                                                                  |
| [`ImportSTL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.ImportSTL)                             | Run the ImportSTL action.                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#id1)                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#id1)                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TranslateX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.TranslateX)                           | Gets or sets the TranslateX.                                  |
| [`Color`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Color)                                     | Gets or sets the Color.                                       |
| [`TranslateY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.TranslateY)                           | Gets or sets the TranslateY.                                  |
| [`TranslateZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.TranslateZ)                           | Gets or sets the TranslateZ.                                  |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#id0)                                  | Gets the internal object. For advanced usage only.            |
| [`FileName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.FileName)                               | Gets or sets the FileName.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Statistics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Statistics)                           | Gets the Statistics.                                          |
| [`LengthUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.LengthUnits)                         | Gets or sets the LengthUnits.                                 |
| [`ShowAlways`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.ShowAlways)                           | Gets or sets the ShowAlways.                                  |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#id0)                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/STL.md#STL.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="STL.TranslateX"></a>

### *property* STL.TranslateX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateX.

<!-- !! processed by numpydoc !! -->

<a id="STL.Color"></a>

### *property* STL.Color *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Color.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateY"></a>

### *property* STL.TranslateY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateY.

<!-- !! processed by numpydoc !! -->

<a id="STL.TranslateZ"></a>

### *property* STL.TranslateZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslateZ.

<!-- !! processed by numpydoc !! -->

<a id="STL.InternalObject"></a>

### *property* STL.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryFileContainerAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.FileName"></a>

### *property* STL.FileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FileName.

<!-- !! processed by numpydoc !! -->

<a id="STL.DataModelObjectCategory"></a>

### *property* STL.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="STL.Statistics"></a>

### *property* STL.Statistics *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Statistics.

<!-- !! processed by numpydoc !! -->

<a id="STL.LengthUnits"></a>

### *property* STL.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="STL.ShowAlways"></a>

### *property* STL.ShowAlways *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAlways.

<!-- !! processed by numpydoc !! -->

<a id="STL.Suppressed"></a>

### *property* STL.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="STL.Children"></a>

### *property* STL.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="STL.Comments"></a>

### *property* STL.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="STL.Figures"></a>

### *property* STL.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="STL.Images"></a>

### *property* STL.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="STL.ReadOnly"></a>

### *property* STL.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* STL.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="STL.Properties"></a>

### *property* STL.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="STL.VisibleProperties"></a>

### *property* STL.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="STL.ExportStl"></a>

### STL.ExportStl(filename: System.String, progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Application.Progress))

Export STL data.

<!-- !! processed by numpydoc !! -->

<a id="STL.ImportSTL"></a>

### STL.ImportSTL()

Run the ImportSTL action.

<!-- !! processed by numpydoc !! -->

<a id="STL.Delete"></a>

### STL.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetChildren"></a>

### STL.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### STL.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddComment"></a>

### STL.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddFigure"></a>

### STL.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="STL.AddImage"></a>

### STL.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="STL.Activate"></a>

### STL.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="STL.CopyTo"></a>

### STL.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="STL.Duplicate"></a>

### STL.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupAllSimilarChildren"></a>

### STL.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="STL.GroupSimilarObjects"></a>

### STL.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByName"></a>

### STL.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="STL.PropertyByAPIName"></a>

### STL.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="STL.CreateParameter"></a>

### STL.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="STL.GetParameter"></a>

### STL.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="STL.RemoveParameter"></a>

### STL.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

