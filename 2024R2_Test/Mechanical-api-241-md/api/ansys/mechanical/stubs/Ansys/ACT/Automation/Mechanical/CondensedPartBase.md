<a id="condensedpartbase"></a>

# CondensedPartBase

<a id="CondensedPartBase"></a>

### *class* CondensedPartBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CondensedPartBase.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddCommandSnippet`](#CondensedPartBase.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#CondensedPartBase.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#CondensedPartBase.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CondensedPartBase.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CondensedPartBase.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CondensedPartBase.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CondensedPartBase.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CondensedPartBase.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CondensedPartBase.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CondensedPartBase.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedPartBase.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CondensedPartBase.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CondensedPartBase.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CondensedPartBase.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CondensedPartBase.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CondensedPartBase.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`NumberInterfaceEntries`](#CondensedPartBase.NumberInterfaceEntries)                                               | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#CondensedPartBase.NumberMasterNodes)                                                         | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](#CondensedPartBase.SolutionName)                                                                   | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](#CondensedPartBase.SolverFilesDirectory)                                                   | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](#CondensedPartBase.TemperatureUnits)                                                           | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](#CondensedPartBase.ReferenceTemperature)                                                   | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](#CondensedPartBase.Physics)                                                                             | Gets the Physics.                                             |
| [`SolverUnitSystem`](#CondensedPartBase.SolverUnitSystem)                                                           | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](#CondensedPartBase.SolutionNameMode)                                                           | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](#CondensedPartBase.SolverUnits)                                                                     | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](#CondensedPartBase.Suppressed)                                                                       | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](#CondensedPartBase.GeometrySelection)                                                         | Gets or sets the GeometrySelection.                           |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#CondensedPartBase.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#CondensedPartBase.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#CondensedPartBase.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#CondensedPartBase.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CondensedPartBase.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CondensedPartBase.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CondensedPartBase
```

<a id="property-detail"></a>

## Property detail

<a id="CondensedPartBase.InternalObject"></a>

### *property* CondensedPartBase.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberInterfaceEntries"></a>

### *property* CondensedPartBase.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberMasterNodes"></a>

### *property* CondensedPartBase.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionName"></a>

### *property* CondensedPartBase.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverFilesDirectory"></a>

### *property* CondensedPartBase.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.TemperatureUnits"></a>

### *property* CondensedPartBase.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ReferenceTemperature"></a>

### *property* CondensedPartBase.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Physics"></a>

### *property* CondensedPartBase.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnitSystem"></a>

### *property* CondensedPartBase.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionNameMode"></a>

### *property* CondensedPartBase.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnits"></a>

### *property* CondensedPartBase.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Suppressed"></a>

### *property* CondensedPartBase.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GeometrySelection"></a>

### *property* CondensedPartBase.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.DataModelObjectCategory"></a>

### *property* CondensedPartBase.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Children"></a>

### *property* CondensedPartBase.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Comments"></a>

### *property* CondensedPartBase.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Figures"></a>

### *property* CondensedPartBase.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Images"></a>

### *property* CondensedPartBase.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CondensedPartBase.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Properties"></a>

### *property* CondensedPartBase.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.VisibleProperties"></a>

### *property* CondensedPartBase.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPartBase.AddCommandSnippet"></a>

### CondensedPartBase.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ClearGeneratedData"></a>

### CondensedPartBase.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Delete"></a>

### CondensedPartBase.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetChildren"></a>

### CondensedPartBase.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CondensedPartBase.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddComment"></a>

### CondensedPartBase.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddFigure"></a>

### CondensedPartBase.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddImage"></a>

### CondensedPartBase.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Activate"></a>

### CondensedPartBase.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CopyTo"></a>

### CondensedPartBase.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Duplicate"></a>

### CondensedPartBase.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupAllSimilarChildren"></a>

### CondensedPartBase.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupSimilarObjects"></a>

### CondensedPartBase.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByName"></a>

### CondensedPartBase.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByAPIName"></a>

### CondensedPartBase.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CreateParameter"></a>

### CondensedPartBase.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetParameter"></a>

### CondensedPartBase.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.RemoveParameter"></a>

### CondensedPartBase.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
