# NamedSelection

### *class* NamedSelection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NamedSelection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportToTextFile`](#NamedSelection.ExportToTextFile)                           | Run the ExportToTextFile action.                                                                                 |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`ExportNamedSelectionToCDBFile`](#NamedSelection.ExportNamedSelectionToCDBFile) | Export Named Selection to CDB file                                                                               |
| [`Generate`](#NamedSelection.Generate)                                           | Generates the selection based on the generation criteria.                                                        |
| [`CreateNodalNamedSelection`](#NamedSelection.CreateNodalNamedSelection)         | Creates a new Named Selection object containing all the nodes from the entities in the current named selection . |
| [`Delete`](#NamedSelection.Delete)                                               | Run the Delete action.                                                                                           |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                                                     |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                                                     |
| [`AddComment`](#NamedSelection.AddComment)                                       | Creates a new child Comment.                                                                                     |
| [`AddFigure`](#NamedSelection.AddFigure)                                         | Creates a new child Figure.                                                                                      |
| [`AddImage`](#NamedSelection.AddImage)                                           | Creates a new child Image.                                                                                       |
| [`Activate`](#NamedSelection.Activate)                                           | Activate the current object.                                                                                     |
| [`CopyTo`](#NamedSelection.CopyTo)                                               | Copies all visible properties from this object to another.                                                       |
| [`Duplicate`](#NamedSelection.Duplicate)                                         | Creates a copy of the current DataModelObject.                                                                   |
| [`GroupAllSimilarChildren`](#NamedSelection.GroupAllSimilarChildren)             | Run the GroupAllSimilarChildren action.                                                                          |
| [`GroupSimilarObjects`](#NamedSelection.GroupSimilarObjects)                     | Run the GroupSimilarObjects action.                                                                              |
| [`PropertyByName`](#NamedSelection.PropertyByName)                               | Get a property by its unique name.                                                                               |
| [`PropertyByAPIName`](#NamedSelection.PropertyByAPIName)                         | Get a property by its API name.                                                                                  |
| [`CreateParameter`](#NamedSelection.CreateParameter)                             | Creates a new parameter for a Property.                                                                          |
| [`GetParameter`](#NamedSelection.GetParameter)                                   | Gets the parameter corresponding to the given property.                                                          |
| [`RemoveParameter`](#NamedSelection.RemoveParameter)                             | Removes the parameter from the parameter set corresponding to the given property.                                |

### Properties

| [`Location`](#NamedSelection.Location)                                                                              | Gets or sets the Location.                                              |
|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| [`GenerationCriteria`](#NamedSelection.GenerationCriteria)                                                          | Returns the generation criteria that is used to generate the selection. |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                      |
| [`CrackFrontNumber`](#NamedSelection.CrackFrontNumber)                                                              | Gets the CrackFrontNumber.                                              |
| [`LSDynaUserId`](#NamedSelection.LSDynaUserId)                                                                      | Gets or sets the LSDynaUserId.                                          |
| [`TotalSelection`](#NamedSelection.TotalSelection)                                                                  | Gets the TotalSelection.                                                |
| [`Suppressed`](#NamedSelection.Suppressed)                                                                          | Gets the Suppressed.                                                    |
| [`RelativeTolerance`](#NamedSelection.RelativeTolerance)                                                            | Gets or sets the RelativeTolerance.                                     |
| [`ZeroTolerance`](#NamedSelection.ZeroTolerance)                                                                    | Gets or sets the ZeroTolerance.                                         |
| [`ScopingMethod`](#NamedSelection.ScopingMethod)                                                                    | Gets or sets the ScopingMethod.                                         |
| [`SendAs`](../../../Mechanical/DataModel/Enums/SendAs.md#SendAs)                                                    | Gets or sets the SendAs.                                                |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                                         |
| [`Type`](#NamedSelection.Type)                                                                                      | Gets the Type.                                                          |
| [`IncludeProgramControlledInflation`](#NamedSelection.IncludeProgramControlledInflation)                            | Gets or sets the IncludeProgramControlledInflation.                     |
| [`PreserveDuringSolve`](#NamedSelection.PreserveDuringSolve)                                                        | Gets or sets the PreserveDuringSolve.                                   |
| [`SendToSolver`](#NamedSelection.SendToSolver)                                                                      | Gets or sets the SendToSolver.                                          |
| [`Visible`](#NamedSelection.Visible)                                                                                | Gets or sets the Visible.                                               |
| [`UsedByMeshWorksheet`](#NamedSelection.UsedByMeshWorksheet)                                                        | Gets the UsedByMeshWorksheet.                                           |
| [`CreatedForCrack`](#NamedSelection.CreatedForCrack)                                                                | Gets the CreatedForCrack.                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                            |
| [`Children`](#NamedSelection.Children)                                                                              | Gets the list of children.                                              |
| [`Comments`](#NamedSelection.Comments)                                                                              | Gets the list of associated comments.                                   |
| [`Figures`](#NamedSelection.Figures)                                                                                | Gets the list of associated figures.                                    |
| [`Images`](#NamedSelection.Images)                                                                                  | Gets the list of associated images.                                     |
| [`ReadOnly`](#NamedSelection.ReadOnly)                                                                              | Gets or sets the ReadOnly.                                              |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                      |
| [`Properties`](#NamedSelection.Properties)                                                                          | Gets the list of properties for this object.                            |
| [`VisibleProperties`](#NamedSelection.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.           |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import NamedSelection
```

## Property detail

### *property* NamedSelection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.GenerationCriteria *: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria](NamedSelectionCriteria.md#NamedSelectionCriteria) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the generation criteria that is used to generate the selection.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.LSDynaUserId *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LSDynaUserId.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.TotalSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalSelection.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Suppressed *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.RelativeTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelativeTolerance.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.ZeroTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZeroTolerance.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.SendAs *: [Ansys.Mechanical.DataModel.Enums.SendAs](../../../Mechanical/DataModel/Enums/SendAs.md#SendAs) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SendAs.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Type *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.IncludeProgramControlledInflation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeProgramControlledInflation.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.PreserveDuringSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreserveDuringSolve.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.SendToSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SendToSolver.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Visible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.UsedByMeshWorksheet *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the UsedByMeshWorksheet.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.CreatedForCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreatedForCrack.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### NamedSelection.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

### NamedSelection.ExportNamedSelectionToCDBFile(filepath: System.String)

Export Named Selection to CDB file

<!-- !! processed by numpydoc !! -->

### NamedSelection.Generate()

Generates the selection based on the generation criteria.

<!-- !! processed by numpydoc !! -->

### NamedSelection.CreateNodalNamedSelection()

Creates a new Named Selection object containing all the nodes from the entities in the current named selection .

<!-- !! processed by numpydoc !! -->

### NamedSelection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NamedSelection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NamedSelection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NamedSelection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### NamedSelection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NamedSelection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NamedSelection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NamedSelection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NamedSelection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NamedSelection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NamedSelection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### NamedSelection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NamedSelection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NamedSelection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
