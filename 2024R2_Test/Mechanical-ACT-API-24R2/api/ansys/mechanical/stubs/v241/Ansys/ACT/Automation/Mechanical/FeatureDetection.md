# `FeatureDetection`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FeatureDetection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DetectFeatures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.DetectFeatures)                   | DetectFeatures method.                                                            |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Definition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Definition)                           | Get the FeatureDetectionDefinition object.                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`ScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`NamedSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/FeatureDetection.md#FeatureDetection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FeatureDetection.Definition"></a>

### *property* FeatureDetection.Definition *: [Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition](FeatureDetectionDefinition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the FeatureDetectionDefinition object.
: This object contains all the Feature Detection data like Fillets, Holes, Chamfers detection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.InternalObject"></a>

### *property* FeatureDetection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFeatureDetectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ScopingMethod"></a>

### *property* FeatureDetection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.NamedSelection"></a>

### *property* FeatureDetection.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Location"></a>

### *property* FeatureDetection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DataModelObjectCategory"></a>

### *property* FeatureDetection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Children"></a>

### *property* FeatureDetection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Comments"></a>

### *property* FeatureDetection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Images"></a>

### *property* FeatureDetection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FeatureDetection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Properties"></a>

### *property* FeatureDetection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.VisibleProperties"></a>

### *property* FeatureDetection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureDetection.ClearGeneratedData"></a>

### FeatureDetection.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DetectFeatures"></a>

### FeatureDetection.DetectFeatures()

DetectFeatures method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.EvaluateAllResults"></a>

### FeatureDetection.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Delete"></a>

### FeatureDetection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetChildren"></a>

### FeatureDetection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FeatureDetection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddComment"></a>

### FeatureDetection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddImage"></a>

### FeatureDetection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Activate"></a>

### FeatureDetection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CopyTo"></a>

### FeatureDetection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Duplicate"></a>

### FeatureDetection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupAllSimilarChildren"></a>

### FeatureDetection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupSimilarObjects"></a>

### FeatureDetection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByName"></a>

### FeatureDetection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByAPIName"></a>

### FeatureDetection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CreateParameter"></a>

### FeatureDetection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetParameter"></a>

### FeatureDetection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.RemoveParameter"></a>

### FeatureDetection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

