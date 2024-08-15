# `Project`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Project

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Project.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `SpecifyMetricTemperatureInKelvin`   | Specify the use of Kelvin thermal units for metric unit systems.                                            |
| `SpecifyMetricTemperatureInCelsius`  | Specify the use of Celsius thermal units for metric unit systems.                                           |
| `ClearGeneratedData`                 | Run the ClearGeneratedData action.                                                                          |
| `Open`                               | For Mechanical opened independently, without Workbench. Open an existing Mechanical project.                |
| `Save`                               | For Mechanical opened independently, without Workbench. Save current Mechanical project.                    |
| `SaveAs`                             | For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.  |
| `New`                                | For Mechanical opened independently, without Workbench. Start a new Mechanical project.                     |
| `Archive`                            | For Mechanical opened independently, without Workbench. Archive a Mechanical project.                       |
| `Unarchive`                          | For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.         |
| `CombineTextFiles`                   | Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                |
| `GetChildren`                        | Gets the list of children, filtered by type.                                                                |
| `AddComment`                         | Creates a new child Comment.                                                                                |
| `AddImage`                           | Creates a new child Image.                                                                                  |
| `Activate`                           | Activate the current object.                                                                                |
| `CopyTo`                             | Copies all visible properties from this object to another.                                                  |
| `Duplicate`                          | Creates a copy of the current DataModelObject.                                                              |
| `GroupAllSimilarChildren`            | Run the GroupAllSimilarChildren action.                                                                     |
| `GroupSimilarObjects`                | Run the GroupSimilarObjects action.                                                                         |
| `PropertyByName`                     | Get a property by its unique name.                                                                          |
| `PropertyByAPIName`                  | Get a property by its API name.                                                                             |
| `CreateParameter`                    | Creates a new parameter for a Property.                                                                     |
| `GetParameter`                       | Gets the parameter corresponding to the given property.                                                     |
| `RemoveParameter`                    | Removes the parameter from the parameter set corresponding to the given property.                           |

### Properties

| Name | Description |
|-----------------------------|----------------------------------------------------------------------|
| `Models`                    | Gets the Model.                                                      |
| `Model`                     | Gets the Model.                                                      |
| `CreationDate`              | Gets the CreationDate.                                               |
| `CreationTime`              | Gets the CreationTime.                                               |
| `UnitSystem`                | Change the Unit System.                                              |
| `ProjectDirectory`          | Gets the Project Directory                                           |
| `UserFiles`                 | Gets the path of the user files folder of current project.           |
| `FilePath`                  | Gets the Mechanical Project file path of current Mechanical session. |
| `InternalObject`            | Gets the internal object. For advanced usage only.                   |
| `Author`                    | Gets or sets the Author.                                             |
| `FirstSaved`                | Gets the FirstSaved.                                                 |
| `ImportedSource`            | Gets the ImportedSource.                                             |
| `ImportedVersion`           | Gets the ImportedVersion.                                            |
| `LastSaved`                 | Gets the LastSaved.                                                  |
| `PreparedFor`               | Gets or sets the PreparedFor.                                        |
| `ProductVersion`            | Gets the ProductVersion.                                             |
| `Subject`                   | Gets or sets the Subject.                                            |
| `SaveProjectAfterSolution`  | Gets or sets the SaveProjectAfterSolution.                           |
| `SaveProjectBeforeSolution` | Gets or sets the SaveProjectBeforeSolution.                          |
| `DataModelObjectCategory`   | Gets the current DataModelObject's category.                         |
| `Children`                  | Gets the list of children.                                           |
| `Comments`                  | Gets the list of associated comments.                                |
| `Images`                    | Gets the list of associated images.                                  |
| `InternalObject`            | Gets the internal object. For advanced usage only.                   |
| `Properties`                | Gets the list of properties for this object.                         |
| `VisibleProperties`         | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

### *property* Project.Models *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Model)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

### *property* Project.Model *: [Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Model) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

### *property* Project.CreationDate *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationDate.

<!-- !! processed by numpydoc !! -->

### *property* Project.CreationTime *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationTime.

<!-- !! processed by numpydoc !! -->

### *property* Project.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.UserUnitSystemType](../../../Mechanical/DataModel/Enums/UserUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UserUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Change the Unit System.

<!-- !! processed by numpydoc !! -->

### *property* Project.ProjectDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Project Directory

<!-- !! processed by numpydoc !! -->

### *property* Project.UserFiles *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the path of the user files folder of current project.

<!-- !! processed by numpydoc !! -->

### *property* Project.FilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mechanical Project file path of current Mechanical session.

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

### *property* Project.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Project.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Project.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Project.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### Project.Open(filePath: System.String)

For Mechanical opened independently, without Workbench. Open an existing Mechanical project.

<!-- !! processed by numpydoc !! -->

### Project.Save()

For Mechanical opened independently, without Workbench. Save current Mechanical project.

<!-- !! processed by numpydoc !! -->

### Project.SaveAs(filePath: System.String, overwrite: System.Boolean)

For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.

<!-- !! processed by numpydoc !! -->

### Project.New()

For Mechanical opened independently, without Workbench. Start a new Mechanical project.

<!-- !! processed by numpydoc !! -->

### Project.Archive(archivePath: System.String, overwrite: System.Boolean, settings: [Ansys.ACT.Automation.Mechanical.ArchiveSettings](ArchiveSettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ArchiveSettings))

For Mechanical opened independently, without Workbench. Archive a Mechanical project.

<!-- !! processed by numpydoc !! -->

### Project.Unarchive(archivePath: System.String, projectPath: System.String, overwrite: System.Boolean)

```text
For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.
If projectPath is provided, the project will be unarchived to this given projectPath.
If projectPath is not provided or is null or empty, the project will be unarchived to a temporary folder.
Returns a path to the unarchived project database file.
```

<!-- !! processed by numpydoc !! -->

### Project.CombineTextFiles(PrimaryFileName: System.String, SecondaryFileName: System.String)

Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file

<!-- !! processed by numpydoc !! -->

### Project.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Project.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Project.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Project.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

