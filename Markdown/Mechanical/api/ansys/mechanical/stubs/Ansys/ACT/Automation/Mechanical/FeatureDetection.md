# FeatureDetection

### *class* FeatureDetection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FeatureDetection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#FeatureDetection.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DetectFeatures`](#FeatureDetection.DetectFeatures)                   | DetectFeatures method.                                                            |
| [`EvaluateAllResults`](#FeatureDetection.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`Delete`](#FeatureDetection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FeatureDetection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FeatureDetection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FeatureDetection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FeatureDetection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FeatureDetection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FeatureDetection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FeatureDetection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FeatureDetection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FeatureDetection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FeatureDetection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FeatureDetection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FeatureDetection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Definition`](#FeatureDetection.Definition)                                                                        | Get the FeatureDetectionDefinition object.                    |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ScopingMethod`](#FeatureDetection.ScopingMethod)                                                                  | Gets or sets the ScopingMethod.                               |
| [`NamedSelection`](NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#FeatureDetection.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FeatureDetection.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#FeatureDetection.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Images`](#FeatureDetection.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FeatureDetection.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FeatureDetection.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import FeatureDetection
```

## Property detail

### *property* FeatureDetection.Definition *: [Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition](FeatureDetectionDefinition.md#FeatureDetectionDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the FeatureDetectionDefinition object.
: This object contains all the Feature Detection data like Fillets, Holes, Chamfers detection.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFeatureDetectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FeatureDetection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FeatureDetection.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.DetectFeatures()

DetectFeatures method.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FeatureDetection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
