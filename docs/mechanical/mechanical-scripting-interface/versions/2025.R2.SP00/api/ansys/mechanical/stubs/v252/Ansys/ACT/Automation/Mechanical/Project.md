# `Project`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Project"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Project

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Project.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
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
|-------------------------------------------------------------------|----------------------------------------------------------------------|
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

### *property* Project.Author *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

<a id="Project.Children"></a>

### *property* Project.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Project.Comments"></a>

### *property* Project.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationDate"></a>

### *property* Project.CreationDate *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationDate.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationTime"></a>

### *property* Project.CreationTime *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CreationTime.

<!-- !! processed by numpydoc !! -->

<a id="Project.DataModelObjectCategory"></a>

### *property* Project.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Project.FilePath"></a>

### *property* Project.FilePath *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Mechanical Project file path of current Mechanical session.

<!-- !! processed by numpydoc !! -->

<a id="Project.FirstSaved"></a>

### *property* Project.FirstSaved *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FirstSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.Images"></a>

### *property* Project.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedSource"></a>

### *property* Project.ImportedSource *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedSource.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedVersion"></a>

### *property* Project.ImportedVersion *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportedVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.InternalObject"></a>

### *property* Project.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProjectAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Project.LastSaved"></a>

### *property* Project.LastSaved *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LastSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.Model"></a>

### *property* Project.Model *: [Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Model) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.Models"></a>

### *property* Project.Models *: Iterable[[Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Model)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.PreparedFor"></a>

### *property* Project.PreparedFor *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreparedFor.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProductVersion"></a>

### *property* Project.ProductVersion *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ProductVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProjectDirectory"></a>

### *property* Project.ProjectDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Project Directory

<!-- !! processed by numpydoc !! -->

<a id="Project.Properties"></a>

### *property* Project.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectAfterSolution"></a>

### *property* Project.SaveProjectAfterSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectAfterSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectBeforeSolution"></a>

### *property* Project.SaveProjectBeforeSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveProjectBeforeSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.Subject"></a>

### *property* Project.Subject *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Subject.

<!-- !! processed by numpydoc !! -->

<a id="Project.UnitSystem"></a>

### *property* Project.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.UserUnitSystemType](../../../Mechanical/DataModel/Enums/UserUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UserUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Change the Unit System.

<!-- !! processed by numpydoc !! -->

<a id="Project.UserFiles"></a>

### *property* Project.UserFiles *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the path of the user files folder of current project.

<!-- !! processed by numpydoc !! -->

<a id="Project.VisibleProperties"></a>

### *property* Project.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Project.Activate"></a>

### Project.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddComment"></a>

### Project.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddImage"></a>

### Project.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.Archive"></a>

### Project.Archive(archivePath: [str](https://docs.python.org/3/library/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/library/functions.html#bool), settings: [Ansys.ACT.Automation.Mechanical.ArchiveSettings](ArchiveSettings.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ArchiveSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

For Mechanical opened independently, without Workbench. Archive a Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.ClearGeneratedData"></a>

### Project.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Project.CombineTextFiles"></a>

### Project.CombineTextFiles(PrimaryFileName: [str](https://docs.python.org/3/library/stdtypes.html#str), SecondaryFileName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file

<!-- !! processed by numpydoc !! -->

<a id="Project.CopyTo"></a>

### Project.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreateParameter"></a>

### Project.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Duplicate"></a>

### Project.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetChildren"></a>

### Project.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetParameter"></a>

### Project.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupAllSimilarChildren"></a>

### Project.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupSimilarObjects"></a>

### Project.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Project.New"></a>

### Project.New() → [None](https://docs.python.org/3/library/constants.html#None)

For Mechanical opened independently, without Workbench. Start a new Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.Open"></a>

### Project.Open(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

For Mechanical opened independently, without Workbench. Open an existing Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByAPIName"></a>

### Project.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByName"></a>

### Project.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Project.RemoveParameter"></a>

### Project.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Save"></a>

### Project.Save() → [None](https://docs.python.org/3/library/constants.html#None)

For Mechanical opened independently, without Workbench. Save current Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveAs"></a>

### Project.SaveAs(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInCelsius"></a>

### Project.SpecifyMetricTemperatureInCelsius() → [None](https://docs.python.org/3/library/constants.html#None)

Specify the use of Celsius thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInKelvin"></a>

### Project.SpecifyMetricTemperatureInKelvin() → [None](https://docs.python.org/3/library/constants.html#None)

Specify the use of Kelvin thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.Unarchive"></a>

### Project.Unarchive(archivePath: [str](https://docs.python.org/3/library/stdtypes.html#str), projectPath: [str](https://docs.python.org/3/library/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/library/functions.html#bool)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

```text
For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.
If projectPath is provided, the project will be unarchived to this given projectPath.
If projectPath is not provided or is null or empty, the project will be unarchived to a temporary folder.
Returns a path to the unarchived project database file.
```

<!-- !! processed by numpydoc !! -->

