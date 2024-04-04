# Project

### *class* Project

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Project.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`SpecifyMetricTemperatureInKelvin`](#Project.SpecifyMetricTemperatureInKelvin)   | Specify the use of Kelvin thermal units for metric unit systems.                                            |
|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [`SpecifyMetricTemperatureInCelsius`](#Project.SpecifyMetricTemperatureInCelsius) | Specify the use of Celsius thermal units for metric unit systems.                                           |
| [`ClearGeneratedData`](#Project.ClearGeneratedData)                               | Run the ClearGeneratedData action.                                                                          |
| [`CombineTextFiles`](#Project.CombineTextFiles)                                   | Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                                                |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                                                |
| [`AddComment`](#Project.AddComment)                                               | Creates a new child Comment.                                                                                |
| [`AddImage`](#Project.AddImage)                                                   | Creates a new child Image.                                                                                  |
| [`Activate`](#Project.Activate)                                                   | Activate the current object.                                                                                |
| [`CopyTo`](#Project.CopyTo)                                                       | Copies all visible properties from this object to another.                                                  |
| [`Duplicate`](#Project.Duplicate)                                                 | Creates a copy of the current DataModelObject.                                                              |
| [`GroupAllSimilarChildren`](#Project.GroupAllSimilarChildren)                     | Run the GroupAllSimilarChildren action.                                                                     |
| [`GroupSimilarObjects`](#Project.GroupSimilarObjects)                             | Run the GroupSimilarObjects action.                                                                         |
| [`PropertyByName`](#Project.PropertyByName)                                       | Get a property by its unique name.                                                                          |
| [`PropertyByAPIName`](#Project.PropertyByAPIName)                                 | Get a property by its API name.                                                                             |
| [`CreateParameter`](#Project.CreateParameter)                                     | Creates a new parameter for a Property.                                                                     |
| [`GetParameter`](#Project.GetParameter)                                           | Gets the parameter corresponding to the given property.                                                     |
| [`RemoveParameter`](#Project.RemoveParameter)                                     | Removes the parameter from the parameter set corresponding to the given property.                           |

### Properties

| [`Models`](#Project.Models)                                                                                         | Gets the Model.                                               |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Model`](Model.md#Model)                                                                                           | Gets the Model.                                               |
| [`CreationDate`](#Project.CreationDate)                                                                             | Gets the CreationDate.                                        |
| [`CreationTime`](#Project.CreationTime)                                                                             | Gets the CreationTime.                                        |
| [`UnitSystem`](#Project.UnitSystem)                                                                                 | Change the Unit System.                                       |
| [`ProjectDirectory`](#Project.ProjectDirectory)                                                                     | Gets the Project Directory                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Author`](#Project.Author)                                                                                         | Gets or sets the Author.                                      |
| [`FirstSaved`](#Project.FirstSaved)                                                                                 | Gets the FirstSaved.                                          |
| [`ImportedSource`](#Project.ImportedSource)                                                                         | Gets the ImportedSource.                                      |
| [`ImportedVersion`](#Project.ImportedVersion)                                                                       | Gets the ImportedVersion.                                     |
| [`LastSaved`](#Project.LastSaved)                                                                                   | Gets the LastSaved.                                           |
| [`PreparedFor`](#Project.PreparedFor)                                                                               | Gets or sets the PreparedFor.                                 |
| [`ProductVersion`](#Project.ProductVersion)                                                                         | Gets the ProductVersion.                                      |
| [`Subject`](#Project.Subject)                                                                                       | Gets or sets the Subject.                                     |
| [`SaveProjectAfterSolution`](#Project.SaveProjectAfterSolution)                                                     | Gets or sets the SaveProjectAfterSolution.                    |
| [`SaveProjectBeforeSolution`](#Project.SaveProjectBeforeSolution)                                                   | Gets or sets the SaveProjectBeforeSolution.                   |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Project.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#Project.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Images`](#Project.Images)                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Project.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Project.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Project
```

## Property detail

### *property* Project.Models *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Model](Model.md#Model)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

### *property* Project.Model *: [Ansys.ACT.Automation.Mechanical.Model](Model.md#Model) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

### *property* Project.CreationDate *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationDate.

<!-- !! processed by numpydoc !! -->

### *property* Project.CreationTime *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationTime.

<!-- !! processed by numpydoc !! -->

### *property* Project.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.UserUnitSystemType](../../../Mechanical/DataModel/Enums/UserUnitSystemType.md#UserUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Change the Unit System.

<!-- !! processed by numpydoc !! -->

### *property* Project.ProjectDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Project Directory

<!-- !! processed by numpydoc !! -->

### *property* Project.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProjectAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Project.Author *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

### *property* Project.FirstSaved *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FirstSaved.

<!-- !! processed by numpydoc !! -->

### *property* Project.ImportedSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedSource.

<!-- !! processed by numpydoc !! -->

### *property* Project.ImportedVersion *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedVersion.

<!-- !! processed by numpydoc !! -->

### *property* Project.LastSaved *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastSaved.

<!-- !! processed by numpydoc !! -->

### *property* Project.PreparedFor *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreparedFor.

<!-- !! processed by numpydoc !! -->

### *property* Project.ProductVersion *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ProductVersion.

<!-- !! processed by numpydoc !! -->

### *property* Project.Subject *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subject.

<!-- !! processed by numpydoc !! -->

### *property* Project.SaveProjectAfterSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectAfterSolution.

<!-- !! processed by numpydoc !! -->

### *property* Project.SaveProjectBeforeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectBeforeSolution.

<!-- !! processed by numpydoc !! -->

### *property* Project.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Project.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Project.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Project.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Project.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Project.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Project.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Project.SpecifyMetricTemperatureInKelvin()

Specify the use of Kelvin thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

### Project.SpecifyMetricTemperatureInCelsius()

Specify the use of Celsius thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

### Project.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Project.CombineTextFiles(PrimaryFileName: System.String, SecondaryFileName: System.String)

Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file

<!-- !! processed by numpydoc !! -->

### Project.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Project.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Project.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Project.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Project.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Project.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Project.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Project.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Project.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Project.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Project.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Project.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Project.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Project.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
