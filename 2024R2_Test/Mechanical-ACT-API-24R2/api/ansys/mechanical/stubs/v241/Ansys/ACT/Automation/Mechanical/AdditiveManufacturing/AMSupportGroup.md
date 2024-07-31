# `AMSupportGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMSupportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DetectSupportFaces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.DetectSupportFaces)           | Runs the Detect Support Faces action.                                             |
| [`AddGeneratedAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddGeneratedAMSupport)     | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddPredefinedAMSupport)   | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddSTLAMSupport)                 | Creates a new GeneratedAMSupport                                                  |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`HangAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.HangAngle)                             | Gets or sets the HangAngle.                                   |
| [`DetectAboveZLocation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.DetectAboveZLocation)       | Gets or sets the DetectAboveZLocation.                        |
| [`OutputType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.OutputType)                           | Gets or sets the OutputType.                                  |
| [`GenerateOnRemesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMSupportGroup.md#AMSupportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AMSupportGroup.InternalObject"></a>

### *property* AMSupportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.HangAngle"></a>

### *property* AMSupportGroup.HangAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HangAngle.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DetectAboveZLocation"></a>

### *property* AMSupportGroup.DetectAboveZLocation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectAboveZLocation.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.OutputType"></a>

### *property* AMSupportGroup.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputType.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GenerateOnRemesh"></a>

### *property* AMSupportGroup.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Location"></a>

### *property* AMSupportGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.DataModelObjectCategory"></a>

### *property* AMSupportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Children"></a>

### *property* AMSupportGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Comments"></a>

### *property* AMSupportGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Figures"></a>

### *property* AMSupportGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Images"></a>

### *property* AMSupportGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AMSupportGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Properties"></a>

### *property* AMSupportGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.VisibleProperties"></a>

### *property* AMSupportGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMSupportGroup.DetectSupportFaces"></a>

### AMSupportGroup.DetectSupportFaces()

Runs the Detect Support Faces action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddGeneratedAMSupport"></a>

### AMSupportGroup.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddPredefinedAMSupport"></a>

### AMSupportGroup.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddSTLAMSupport"></a>

### AMSupportGroup.AddSTLAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PromoteToNamedSelection"></a>

### AMSupportGroup.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Delete"></a>

### AMSupportGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetChildren"></a>

### AMSupportGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AMSupportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddComment"></a>

### AMSupportGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddFigure"></a>

### AMSupportGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.AddImage"></a>

### AMSupportGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Activate"></a>

### AMSupportGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CopyTo"></a>

### AMSupportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Duplicate"></a>

### AMSupportGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupAllSimilarChildren"></a>

### AMSupportGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GroupSimilarObjects"></a>

### AMSupportGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByName"></a>

### AMSupportGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.PropertyByAPIName"></a>

### AMSupportGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.CreateParameter"></a>

### AMSupportGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.GetParameter"></a>

### AMSupportGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.RemoveParameter"></a>

### AMSupportGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

