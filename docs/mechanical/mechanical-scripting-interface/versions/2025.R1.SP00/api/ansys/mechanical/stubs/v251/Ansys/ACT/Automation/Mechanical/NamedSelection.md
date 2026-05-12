# `NamedSelection`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NamedSelection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NamedSelection.Activate)                                           | Activate the current object.                                                                                     |
| [`AddComment`](#NamedSelection.AddComment)                                       | Creates a new child Comment.                                                                                     |
| [`AddFigure`](#NamedSelection.AddFigure)                                         | Creates a new child Figure.                                                                                      |
| [`AddImage`](#NamedSelection.AddImage)                                           | Creates a new child Image.                                                                                       |
| [`CopyTo`](#NamedSelection.CopyTo)                                               | Copies all visible properties from this object to another.                                                       |
| [`CreateNodalNamedSelection`](#NamedSelection.CreateNodalNamedSelection)         | Creates a new Named Selection object containing all the nodes from the entities in the current named selection . |
| [`CreateParameter`](#NamedSelection.CreateParameter)                             | Creates a new parameter for a Property.                                                                          |
| [`Delete`](#NamedSelection.Delete)                                               | Run the Delete action.                                                                                           |
| [`Duplicate`](#NamedSelection.Duplicate)                                         | Creates a copy of the current DataModelObject.                                                                   |
| [`ExportNamedSelectionToCDBFile`](#NamedSelection.ExportNamedSelectionToCDBFile) | Export Named Selection to CDB file                                                                               |
| [`ExportToTextFile`](#NamedSelection.ExportToTextFile)                           | Run the ExportToTextFile action.                                                                                 |
| [`Generate`](#NamedSelection.Generate)                                           | Generates the selection based on the generation criteria.                                                        |
| [`GetChildren`](#NamedSelection.GetChildren)                                     | Gets the list of children, filtered by type.                                                                     |
| [`GetParameter`](#NamedSelection.GetParameter)                                   | Gets the parameter corresponding to the given property.                                                          |
| [`GroupAllSimilarChildren`](#NamedSelection.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                                          |
| [`GroupSimilarObjects`](#NamedSelection.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                                              |
| [`PropertyByAPIName`](#NamedSelection.PropertyByAPIName)                         | Get a property by its API name.                                                                                  |
| [`PropertyByName`](#NamedSelection.PropertyByName)                               | Get a property by its unique name.                                                                               |
| [`RemoveParameter`](#NamedSelection.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.                                |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`Children`](#NamedSelection.Children)                                                   | Gets the list of children.                                              |
| [`Comments`](#NamedSelection.Comments)                                                   | Gets the list of associated comments.                                   |
| [`CrackFrontNumber`](#NamedSelection.CrackFrontNumber)                                   | Gets the CrackFrontNumber.                                              |
| [`CreatedForCrack`](#NamedSelection.CreatedForCrack)                                     | Gets the CreatedForCrack.                                               |
| [`DataModelObjectCategory`](#NamedSelection.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                            |
| [`Figures`](#NamedSelection.Figures)                                                     | Gets the list of associated figures.                                    |
| [`GenerationCriteria`](#NamedSelection.GenerationCriteria)                               | Returns the generation criteria that is used to generate the selection. |
| [`Images`](#NamedSelection.Images)                                                       | Gets the list of associated images.                                     |
| [`IncludeProgramControlledInflation`](#NamedSelection.IncludeProgramControlledInflation) | Gets or sets the IncludeProgramControlledInflation.                     |
| [`InternalObject`](#NamedSelection.InternalObject)                                       | Gets the internal object. For advanced usage only.                      |
| [`LSDynaUserId`](#NamedSelection.LSDynaUserId)                                           | Gets or sets the LSDynaUserId.                                          |
| [`Location`](#NamedSelection.Location)                                                   | Gets or sets the Location.                                              |
| [`PreserveDuringSolve`](#NamedSelection.PreserveDuringSolve)                             | Gets or sets the PreserveDuringSolve.                                   |
| [`Properties`](#NamedSelection.Properties)                                               | Gets the list of properties for this object.                            |
| [`ReadOnly`](#NamedSelection.ReadOnly)                                                   | Gets or sets the ReadOnly.                                              |
| [`RelativeTolerance`](#NamedSelection.RelativeTolerance)                                 | Gets or sets the RelativeTolerance.                                     |
| [`ScopingMethod`](#NamedSelection.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                         |
| [`SendAs`](#NamedSelection.SendAs)                                                       | Gets or sets the SendAs.                                                |
| [`SendToSolver`](#NamedSelection.SendToSolver)                                           | Gets or sets the SendToSolver.                                          |
| [`Suppressed`](#NamedSelection.Suppressed)                                               | Gets the Suppressed.                                                    |
| [`ToleranceType`](#NamedSelection.ToleranceType)                                         | Gets or sets the ToleranceType.                                         |
| [`TotalSelection`](#NamedSelection.TotalSelection)                                       | Gets the TotalSelection.                                                |
| [`Type`](#NamedSelection.Type)                                                           | Gets the Type.                                                          |
| [`UsedByMeshWorksheet`](#NamedSelection.UsedByMeshWorksheet)                             | Gets the UsedByMeshWorksheet.                                           |
| [`Visible`](#NamedSelection.Visible)                                                     | Gets or sets the Visible.                                               |
| [`VisibleProperties`](#NamedSelection.VisibleProperties)                                 | Gets the list of properties that are visible for this object.           |
| [`ZeroTolerance`](#NamedSelection.ZeroTolerance)                                         | Gets or sets the ZeroTolerance.                                         |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelection.Children"></a>

### *property* NamedSelection.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Comments"></a>

### *property* NamedSelection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CrackFrontNumber"></a>

### *property* NamedSelection.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreatedForCrack"></a>

### *property* NamedSelection.CreatedForCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreatedForCrack.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.DataModelObjectCategory"></a>

### *property* NamedSelection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Figures"></a>

### *property* NamedSelection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GenerationCriteria"></a>

### *property* NamedSelection.GenerationCriteria *: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria](NamedSelectionCriteria.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the generation criteria that is used to generate the selection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Images"></a>

### *property* NamedSelection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IncludeProgramControlledInflation"></a>

### *property* NamedSelection.IncludeProgramControlledInflation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeProgramControlledInflation.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.InternalObject"></a>

### *property* NamedSelection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.LSDynaUserId"></a>

### *property* NamedSelection.LSDynaUserId *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LSDynaUserId.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Location"></a>

### *property* NamedSelection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PreserveDuringSolve"></a>

### *property* NamedSelection.PreserveDuringSolve *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Properties"></a>

### *property* NamedSelection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ReadOnly"></a>

### *property* NamedSelection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.RelativeTolerance"></a>

### *property* NamedSelection.RelativeTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ScopingMethod"></a>

### *property* NamedSelection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SendAs"></a>

### *property* NamedSelection.SendAs *: [Ansys.Mechanical.DataModel.Enums.SendAs](../../../Mechanical/DataModel/Enums/SendAs.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SendAs) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SendAs.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SendToSolver"></a>

### *property* NamedSelection.SendToSolver *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SendToSolver.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Suppressed"></a>

### *property* NamedSelection.Suppressed *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ToleranceType"></a>

### *property* NamedSelection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../Mechanical/DataModel/Enums/ToleranceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.TotalSelection"></a>

### *property* NamedSelection.TotalSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalSelection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Type"></a>

### *property* NamedSelection.Type *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.UsedByMeshWorksheet"></a>

### *property* NamedSelection.UsedByMeshWorksheet *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UsedByMeshWorksheet.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Visible"></a>

### *property* NamedSelection.Visible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.VisibleProperties"></a>

### *property* NamedSelection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ZeroTolerance"></a>

### *property* NamedSelection.ZeroTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroTolerance.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelection.Activate"></a>

### NamedSelection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddComment"></a>

### NamedSelection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddFigure"></a>

### NamedSelection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddImage"></a>

### NamedSelection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CopyTo"></a>

### NamedSelection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateNodalNamedSelection"></a>

### NamedSelection.CreateNodalNamedSelection()

Creates a new Named Selection object containing all the nodes from the entities in the current named selection .

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateParameter"></a>

### NamedSelection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Delete"></a>

### NamedSelection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Duplicate"></a>

### NamedSelection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ExportNamedSelectionToCDBFile"></a>

### NamedSelection.ExportNamedSelectionToCDBFile(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Export Named Selection to CDB file

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ExportToTextFile"></a>

### NamedSelection.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Generate"></a>

### NamedSelection.Generate()

Generates the selection based on the generation criteria.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetChildren"></a>

### NamedSelection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetParameter"></a>

### NamedSelection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GroupAllSimilarChildren"></a>

### NamedSelection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GroupSimilarObjects"></a>

### NamedSelection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PropertyByAPIName"></a>

### NamedSelection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PropertyByName"></a>

### NamedSelection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.RemoveParameter"></a>

### NamedSelection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

