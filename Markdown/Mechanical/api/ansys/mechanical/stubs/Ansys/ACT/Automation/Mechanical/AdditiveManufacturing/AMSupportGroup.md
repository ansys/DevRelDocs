# AMSupportGroup

### *class* AMSupportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMSupportGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`DetectSupportFaces`](#AMSupportGroup.DetectSupportFaces)           | Runs the Detect Support Faces action.                                             |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`HangAngle`](#AMSupportGroup.HangAngle)                                                                               | Gets or sets the HangAngle.                                   |
| [`DetectAboveZLocation`](#AMSupportGroup.DetectAboveZLocation)                                                         | Gets or sets the DetectAboveZLocation.                        |
| [`OutputType`](#AMSupportGroup.OutputType)                                                                             | Gets or sets the OutputType.                                  |
| [`GenerateOnRemesh`](#AMSupportGroup.GenerateOnRemesh)                                                                 | Gets or sets the GenerateOnRemesh.                            |
| [`Location`](#AMSupportGroup.Location)                                                                                 | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#AMSupportGroup.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#AMSupportGroup.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#AMSupportGroup.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#AMSupportGroup.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AMSupportGroup.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AMSupportGroup.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMSupportGroup
```

## Property detail

### *property* AMSupportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMSupportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.HangAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HangAngle.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.DetectAboveZLocation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetectAboveZLocation.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.OutputType *: [Ansys.Mechanical.DataModel.Enums.AMSupportGroupOutputType](../../../../Mechanical/DataModel/Enums/AMSupportGroupOutputType.md#AMSupportGroupOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OutputType.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMSupportGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AMSupportGroup.DetectSupportFaces()

Runs the Detect Support Faces action.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddSTLAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMSupportGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
