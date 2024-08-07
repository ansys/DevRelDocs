# `AMSupportGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMSupportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DetectSupportFaces`](#AMSupportGroup.DetectSupportFaces)           | Runs the Detect Support Faces action.                                             |
| [`AddGeneratedAMSupport`](#AMSupportGroup.AddGeneratedAMSupport)     | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](#AMSupportGroup.AddPredefinedAMSupport)   | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#AMSupportGroup.AddSTLAMSupport)                 | Creates a new GeneratedAMSupport                                                  |
| [`PromoteToNamedSelection`](#AMSupportGroup.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AMSupportGroup.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AMSupportGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMSupportGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AMSupportGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AMSupportGroup.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AMSupportGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AMSupportGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AMSupportGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMSupportGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AMSupportGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AMSupportGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AMSupportGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AMSupportGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AMSupportGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`HangAngle`](#AMSupportGroup.HangAngle)                             | Gets or sets the HangAngle.                                   |
| [`DetectAboveZLocation`](#AMSupportGroup.DetectAboveZLocation)       | Gets or sets the DetectAboveZLocation.                        |
| [`OutputType`](#AMSupportGroup.OutputType)                           | Gets or sets the OutputType.                                  |
| [`GenerateOnRemesh`](#AMSupportGroup.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`Location`](#AMSupportGroup.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#AMSupportGroup.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#AMSupportGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AMSupportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#AMSupportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AMSupportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMSupportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMSupportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

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

### *property* AMSupportGroup.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* AMSupportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Children"></a>

### *property* AMSupportGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Comments"></a>

### *property* AMSupportGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Figures"></a>

### *property* AMSupportGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMSupportGroup.Images"></a>

### *property* AMSupportGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### AMSupportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

