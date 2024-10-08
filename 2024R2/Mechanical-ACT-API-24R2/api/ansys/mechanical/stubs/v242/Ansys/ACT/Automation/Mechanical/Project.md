# `Project`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Project"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Project

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Project.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Project.Activate)                                                   | Activate the current object.                                                                                |
| [`AddComment`](#Project.AddComment)                                               | Creates a new child Comment.                                                                                |
| [`AddImage`](#Project.AddImage)                                                   | Creates a new child Image.                                                                                  |
| [`Archive`](#Project.Archive)                                                     | For Mechanical opened independently, without Workbench. Archive a Mechanical project.                       |
| [`ClearGeneratedData`](#Project.ClearGeneratedData)                               | Run the ClearGeneratedData action.                                                                          |
| [`CombineTextFiles`](#Project.CombineTextFiles)                                   | Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file |
| [`CopyTo`](#Project.CopyTo)                                                       | Copies all visible properties from this object to another.                                                  |
| [`CreateParameter`](#Project.CreateParameter)                                     | Creates a new parameter for a Property.                                                                     |
| [`Duplicate`](#Project.Duplicate)                                                 | Creates a copy of the current DataModelObject.                                                              |
| [`GetChildren`](#Project.GetChildren)                                             | Gets the list of children, filtered by type.                                                                |
| [`GetParameter`](#Project.GetParameter)                                           | Gets the parameter corresponding to the given property.                                                     |
| [`GroupAllSimilarChildren`](#Project.GroupAllSimilarChildren)                     | Run the GroupAllSimilarChildren action.                                                                     |
| [`GroupSimilarObjects`](#Project.GroupSimilarObjects)                             | Run the GroupSimilarObjects action.                                                                         |
| [`New`](#Project.New)                                                             | For Mechanical opened independently, without Workbench. Start a new Mechanical project.                     |
| [`Open`](#Project.Open)                                                           | For Mechanical opened independently, without Workbench. Open an existing Mechanical project.                |
| [`PropertyByAPIName`](#Project.PropertyByAPIName)                                 | Get a property by its API name.                                                                             |
| [`PropertyByName`](#Project.PropertyByName)                                       | Get a property by its unique name.                                                                          |
| [`RemoveParameter`](#Project.RemoveParameter)                                     | Removes the parameter from the parameter set corresponding to the given property.                           |
| [`Save`](#Project.Save)                                                           | For Mechanical opened independently, without Workbench. Save current Mechanical project.                    |
| [`SaveAs`](#Project.SaveAs)                                                       | For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.  |
| [`SpecifyMetricTemperatureInCelsius`](#Project.SpecifyMetricTemperatureInCelsius) | Specify the use of Celsius thermal units for metric unit systems.                                           |
| [`SpecifyMetricTemperatureInKelvin`](#Project.SpecifyMetricTemperatureInKelvin)   | Specify the use of Kelvin thermal units for metric unit systems.                                            |
| [`Unarchive`](#Project.Unarchive)                                                 | For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.         |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`Author`](#Project.Author)                                       | Gets or sets the Author.                                             |
| [`Children`](#Project.Children)                                   | Gets the list of children.                                           |
| [`Comments`](#Project.Comments)                                   | Gets the list of associated comments.                                |
| [`CreationDate`](#Project.CreationDate)                           | Gets the CreationDate.                                               |
| [`CreationTime`](#Project.CreationTime)                           | Gets the CreationTime.                                               |
| [`DataModelObjectCategory`](#Project.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                         |
| [`FilePath`](#Project.FilePath)                                   | Gets the Mechanical Project file path of current Mechanical session. |
| [`FirstSaved`](#Project.FirstSaved)                               | Gets the FirstSaved.                                                 |
| [`Images`](#Project.Images)                                       | Gets the list of associated images.                                  |
| [`ImportedSource`](#Project.ImportedSource)                       | Gets the ImportedSource.                                             |
| [`ImportedVersion`](#Project.ImportedVersion)                     | Gets the ImportedVersion.                                            |
| [`InternalObject`](#Project.InternalObject)                       | Gets the internal object. For advanced usage only.                   |
| [`LastSaved`](#Project.LastSaved)                                 | Gets the LastSaved.                                                  |
| [`Model`](#Project.Model)                                         | Gets the Model.                                                      |
| [`Models`](#Project.Models)                                       | Gets the Model.                                                      |
| [`PreparedFor`](#Project.PreparedFor)                             | Gets or sets the PreparedFor.                                        |
| [`ProductVersion`](#Project.ProductVersion)                       | Gets the ProductVersion.                                             |
| [`ProjectDirectory`](#Project.ProjectDirectory)                   | Gets the Project Directory                                           |
| [`Properties`](#Project.Properties)                               | Gets the list of properties for this object.                         |
| [`SaveProjectAfterSolution`](#Project.SaveProjectAfterSolution)   | Gets or sets the SaveProjectAfterSolution.                           |
| [`SaveProjectBeforeSolution`](#Project.SaveProjectBeforeSolution) | Gets or sets the SaveProjectBeforeSolution.                          |
| [`Subject`](#Project.Subject)                                     | Gets or sets the Subject.                                            |
| [`UnitSystem`](#Project.UnitSystem)                               | Change the Unit System.                                              |
| [`UserFiles`](#Project.UserFiles)                                 | Gets the path of the user files folder of current project.           |
| [`VisibleProperties`](#Project.VisibleProperties)                 | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

<a id="Project.Author"></a>

### *property* Project.Author *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

<a id="Project.Children"></a>

### *property* Project.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Project.Comments"></a>

### *property* Project.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationDate"></a>

### *property* Project.CreationDate *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationDate.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationTime"></a>

### *property* Project.CreationTime *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationTime.

<!-- !! processed by numpydoc !! -->

<a id="Project.DataModelObjectCategory"></a>

### *property* Project.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Project.FilePath"></a>

### *property* Project.FilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mechanical Project file path of current Mechanical session.

<!-- !! processed by numpydoc !! -->

<a id="Project.FirstSaved"></a>

### *property* Project.FirstSaved *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FirstSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.Images"></a>

### *property* Project.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedSource"></a>

### *property* Project.ImportedSource *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedSource.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedVersion"></a>

### *property* Project.ImportedVersion *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.InternalObject"></a>

### *property* Project.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProjectAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Project.LastSaved"></a>

### *property* Project.LastSaved *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.Model"></a>

### *property* Project.Model *: [Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Model) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.Models"></a>

### *property* Project.Models *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Model)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.PreparedFor"></a>

### *property* Project.PreparedFor *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreparedFor.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProductVersion"></a>

### *property* Project.ProductVersion *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ProductVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProjectDirectory"></a>

### *property* Project.ProjectDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Project Directory

<!-- !! processed by numpydoc !! -->

<a id="Project.Properties"></a>

### *property* Project.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectAfterSolution"></a>

### *property* Project.SaveProjectAfterSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectAfterSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectBeforeSolution"></a>

### *property* Project.SaveProjectBeforeSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectBeforeSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.Subject"></a>

### *property* Project.Subject *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subject.

<!-- !! processed by numpydoc !! -->

<a id="Project.UnitSystem"></a>

### *property* Project.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.UserUnitSystemType](../../../Mechanical/DataModel/Enums/UserUnitSystemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.UserUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Change the Unit System.

<!-- !! processed by numpydoc !! -->

<a id="Project.UserFiles"></a>

### *property* Project.UserFiles *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the path of the user files folder of current project.

<!-- !! processed by numpydoc !! -->

<a id="Project.VisibleProperties"></a>

### *property* Project.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Project.Activate"></a>

### Project.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddComment"></a>

### Project.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddImage"></a>

### Project.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.Archive"></a>

### Project.Archive(archivePath: System.String, overwrite: System.Boolean, settings: [Ansys.ACT.Automation.Mechanical.ArchiveSettings](../../../../../v241/Ansys/ACT/Automation/Mechanical/ArchiveSettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ArchiveSettings))

For Mechanical opened independently, without Workbench. Archive a Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.ClearGeneratedData"></a>

### Project.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Project.CombineTextFiles"></a>

### Project.CombineTextFiles(PrimaryFileName: System.String, SecondaryFileName: System.String)

Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file

<!-- !! processed by numpydoc !! -->

<a id="Project.CopyTo"></a>

### Project.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreateParameter"></a>

### Project.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Duplicate"></a>

### Project.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetChildren"></a>

### Project.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetParameter"></a>

### Project.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupAllSimilarChildren"></a>

### Project.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupSimilarObjects"></a>

### Project.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Project.New"></a>

### Project.New()

For Mechanical opened independently, without Workbench. Start a new Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.Open"></a>

### Project.Open(filePath: System.String)

For Mechanical opened independently, without Workbench. Open an existing Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByAPIName"></a>

### Project.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByName"></a>

### Project.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Project.RemoveParameter"></a>

### Project.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Save"></a>

### Project.Save()

For Mechanical opened independently, without Workbench. Save current Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveAs"></a>

### Project.SaveAs(filePath: System.String, overwrite: System.Boolean)

For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInCelsius"></a>

### Project.SpecifyMetricTemperatureInCelsius()

Specify the use of Celsius thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInKelvin"></a>

### Project.SpecifyMetricTemperatureInKelvin()

Specify the use of Kelvin thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.Unarchive"></a>

### Project.Unarchive(archivePath: System.String, projectPath: System.String, overwrite: System.Boolean)

```text
For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.
If projectPath is provided, the project will be unarchived to this given projectPath.
If projectPath is not provided or is null or empty, the project will be unarchived to a temporary folder.
Returns a path to the unarchived project database file.
```

<!-- !! processed by numpydoc !! -->

