# `Project`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Project"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Project(internalObject: Any)

<a id="Project"></a>

### *class* Project(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Project.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`DetermineStandaloneAppletModeFromArchive`](#Project.DetermineStandaloneAppletModeFromArchive)   | DetermineStandaloneAppletModeFromArchive method.   |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Project.Activate)                                                   | Activate the current object.                                                                                                   |
| [`AddComment`](#Project.AddComment)                                               | Creates a new child Comment.                                                                                                   |
| [`AddImage`](#Project.AddImage)                                                   | Creates a new child Image.                                                                                                     |
| [`AddMaterial`](#Project.AddMaterial)                                             | Add a material from a file to the project.                                                                                     |
| [`Archive`](#Project.Archive)                                                     | For Mechanical opened independently, without Workbench. Archive a Mechanical project.                                          |
| [`BackupExists`](#Project.BackupExists)                                           | BackupExists method.                                                                                                           |
| [`BackupRemove`](#Project.BackupRemove)                                           | BackupRemove method.                                                                                                           |
| [`BackupRestore`](#Project.BackupRestore)                                         | BackupRestore method.                                                                                                          |
| [`BackupSaveAsCopy`](#Project.BackupSaveAsCopy)                                   | BackupSaveAsCopy method.                                                                                                       |
| [`ClearGeneratedData`](#Project.ClearGeneratedData)                               | Run the ClearGeneratedData action.                                                                                             |
| [`CombineTextFiles`](#Project.CombineTextFiles)                                   | Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file                    |
| [`Copy`](#Project.Copy)                                                           | Copies the current DataModelObject.                                                                                            |
| [`CopyTo`](#Project.CopyTo)                                                       | Copies all visible properties from this object to another.                                                                     |
| [`CreateObjRef`](#Project.CreateObjRef)                                           | CreateObjRef method.                                                                                                           |
| [`CreateParameter`](#Project.CreateParameter)                                     | Creates a new parameter for a Property.                                                                                        |
| [`Cut`](#Project.Cut)                                                             | Cuts the current DataModelObject.                                                                                              |
| [`Duplicate`](#Project.Duplicate)                                                 | Creates a copy of the current DataModelObject.                                                                                 |
| [`Equals`](#Project.Equals)                                                       | Equals method.                                                                                                                 |
| [`ExportReferenceManagerDataXML`](#Project.ExportReferenceManagerDataXML)         | ExportReferenceManagerDataXML method.                                                                                          |
| [`ExportToMechdat`](#Project.ExportToMechdat)                                     | Export the current project to a mechdat file.                                                                                  |
| [`ForceUnlock`](#Project.ForceUnlock)                                             | ForceUnlock method.                                                                                                            |
| [`GetAPIName`](#Project.GetAPIName)                                               | Property name bound to dispId.                                                                                                 |
| [`GetAllProperties`](#Project.GetAllProperties)                                   | GetAllProperties method.                                                                                                       |
| [`GetCanonicalProjectPath`](#Project.GetCanonicalProjectPath)                     | GetCanonicalProjectPath method.                                                                                                |
| [`GetChildren`](#Project.GetChildren)                                             | Gets the list of children, filtered by type.                                                                                   |
| [`GetDetailsView`](#Project.GetDetailsView)                                       | GetDetailsView method.                                                                                                         |
| [`GetEnumName`](#Project.GetEnumName)                                             | Enum name bound to value                                                                                                       |
| [`GetHashCode`](#Project.GetHashCode)                                             | GetHashCode method.                                                                                                            |
| [`GetIconFile`](#Project.GetIconFile)                                             | GetIconFile method.                                                                                                            |
| [`GetLifetimeService`](#Project.GetLifetimeService)                               | GetLifetimeService method.                                                                                                     |
| [`GetObjectData`](#Project.GetObjectData)                                         | GetObjectData method.                                                                                                          |
| [`GetParameter`](#Project.GetParameter)                                           | Gets the parameter corresponding to the given property.                                                                        |
| [`GetPath`](#Project.GetPath)                                                     | GetPath method.                                                                                                                |
| [`GetPropertyName`](#Project.GetPropertyName)                                     | GetPropertyName method.                                                                                                        |
| [`GetPropertyValue`](#Project.GetPropertyValue)                                   | GetPropertyValue method.                                                                                                       |
| [`GetVisibleProperties`](#Project.GetVisibleProperties)                           | GetVisibleProperties method.                                                                                                   |
| [`GetVisiblePropertyNames`](#Project.GetVisiblePropertyNames)                     | GetVisiblePropertyNames method.                                                                                                |
| [`GroupAllSimilarChildren`](#Project.GroupAllSimilarChildren)                     | Run the GroupAllSimilarChildren action.                                                                                        |
| [`GroupSimilarObjects`](#Project.GroupSimilarObjects)                             | Run the GroupSimilarObjects action.                                                                                            |
| [`InitializeLifetimeService`](#Project.InitializeLifetimeService)                 | InitializeLifetimeService method.                                                                                              |
| [`IsPropertyEditable`](#Project.IsPropertyEditable)                               | IsPropertyEditable method.                                                                                                     |
| [`IsPropertyVisible`](#Project.IsPropertyVisible)                                 | IsPropertyVisible method.                                                                                                      |
| [`New`](#Project.New)                                                             | For Mechanical opened independently, without Workbench. Start a new Mechanical project.                                        |
| [`Open`](#Project.Open)                                                           | For Mechanical opened independently, without Workbench. Open an existing Mechanical project.                                   |
| [`Paste`](#Project.Paste)                                                         | Pastes to the current DataModelObject context.                                                                                 |
| [`PropertyByAPIName`](#Project.PropertyByAPIName)                                 | Get a property by its API name.                                                                                                |
| [`PropertyById`](#Project.PropertyById)                                           | PropertyById method.                                                                                                           |
| [`PropertyByName`](#Project.PropertyByName)                                       | Get a property by its unique name.                                                                                             |
| [`RemoveDuplicateBodies`](#Project.RemoveDuplicateBodies)                         | Removes dupliate bodies from the tree.                                                                                         |
| [`RemoveFromGroup`](#Project.RemoveFromGroup)                                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                    |
| [`RemoveParameter`](#Project.RemoveParameter)                                     | Removes the parameter from the parameter set corresponding to the given property.                                              |
| [`ResetArchiveData`](#Project.ResetArchiveData)                                   | For Mechanical opened independently, without Workbench. Resets the cached file path data for opening an archived project file. |
| [`Save`](#Project.Save)                                                           | For Mechanical opened independently, without Workbench. Save current Mechanical project.                                       |
| [`SaveAs`](#Project.SaveAs)                                                       | For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.                     |
| [`SpecifyMetricTemperatureInCelsius`](#Project.SpecifyMetricTemperatureInCelsius) | Specify the use of Celsius thermal units for metric unit systems.                                                              |
| [`SpecifyMetricTemperatureInKelvin`](#Project.SpecifyMetricTemperatureInKelvin)   | Specify the use of Kelvin thermal units for metric unit systems.                                                               |
| [`Unarchive`](#Project.Unarchive)                                                 | For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.                            |
| [`ValidateStateEngine`](#Project.ValidateStateEngine)                             | Runs a full state engine validation of the tree                                                                                |

### Properties

| Name | Description |
|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#Project.AttachedRefs)                           | AttachedRefs property.                                                                                                                    |
| [`Author`](#Project.Author)                                       | Gets or sets the Author.                                                                                                                  |
| [`Children`](#Project.Children)                                   | Gets the list of children.                                                                                                                |
| [`ClsId`](#Project.ClsId)                                         | ClsId property.                                                                                                                           |
| [`Comments`](#Project.Comments)                                   | Gets the list of associated comments.                                                                                                     |
| [`CreationDate`](#Project.CreationDate)                           | Gets the CreationDate.                                                                                                                    |
| [`CreationTime`](#Project.CreationTime)                           | Gets the CreationTime.                                                                                                                    |
| [`DataModelObjectCategory`](#Project.DataModelObjectCategory)     | Gets the current DataModelObject's category.                                                                                              |
| [`EngineeringDataLibrary`](#Project.EngineeringDataLibrary)       | EngineeringDataLibrary property.                                                                                                          |
| [`FilePath`](#Project.FilePath)                                   | Gets the Mechanical Project file path of current Mechanical session.                                                                      |
| [`FirstSaved`](#Project.FirstSaved)                               | Gets the FirstSaved.                                                                                                                      |
| [`GroupingFolder`](#Project.GroupingFolder)                       | GroupingFolder property.                                                                                                                  |
| [`IconName`](#Project.IconName)                                   | IconName property.                                                                                                                        |
| [`Images`](#Project.Images)                                       | Gets the list of associated images.                                                                                                       |
| [`ImportedSource`](#Project.ImportedSource)                       | Gets the ImportedSource.                                                                                                                  |
| [`ImportedVersion`](#Project.ImportedVersion)                     | Gets the ImportedVersion.                                                                                                                 |
| [`InternalObject`](#Project.InternalObject)                       | Gets the internal object. For advanced usage only.                                                                                        |
| [`IsArchive`](#Project.IsArchive)                                 | For Mechanical opened independently, without Workbench. Returns True when working in an opened archive project, otherwise, returns False. |
| [`LastSaved`](#Project.LastSaved)                                 | Gets the LastSaved.                                                                                                                       |
| [`Model`](Model.md#Model)                                         | Gets the Model.                                                                                                                           |
| [`Models`](#Project.Models)                                       | Gets the Model.                                                                                                                           |
| [`Name`](#Project.Name)                                           | Name property.                                                                                                                            |
| [`ObjectId`](#Project.ObjectId)                                   | ObjectId property.                                                                                                                        |
| [`ObjectState`](#Project.ObjectState)                             | ObjectState property.                                                                                                                     |
| [`ObjectTags`](#Project.ObjectTags)                               | ObjectTags property.                                                                                                                      |
| [`OriginalArchiveFile`](#Project.OriginalArchiveFile)             | For Mechanical opened independently, without Workbench. Returns the original archive file path opened in current session.                 |
| [`Parent`](#Project.Parent)                                       | Parent property.                                                                                                                          |
| [`PreparedFor`](#Project.PreparedFor)                             | Gets or sets the PreparedFor.                                                                                                             |
| [`ProductVersion`](#Project.ProductVersion)                       | Gets the ProductVersion.                                                                                                                  |
| [`ProjectDirectory`](#Project.ProjectDirectory)                   | Gets the Project Directory                                                                                                                |
| [`Properties`](#Project.Properties)                               | Gets the list of properties for this object.                                                                                              |
| [`SaveProjectAfterSolution`](#Project.SaveProjectAfterSolution)   | Gets or sets the SaveProjectAfterSolution.                                                                                                |
| [`SaveProjectBeforeSolution`](#Project.SaveProjectBeforeSolution) | Gets or sets the SaveProjectBeforeSolution.                                                                                               |
| [`State`](#Project.State)                                         | State property.                                                                                                                           |
| [`StateEngineMode`](#Project.StateEngineMode)                     | Sets the State Engine Mode which controls validation                                                                                      |
| [`Subject`](#Project.Subject)                                     | Gets or sets the Subject.                                                                                                                 |
| [`UnarchivedProjectFile`](#Project.UnarchivedProjectFile)         | For Mechanical opened independently, without Workbench. Returns the unarchived project file path of the current session.                  |
| [`UnitSystem`](#Project.UnitSystem)                               | Change the Unit System.                                                                                                                   |
| [`UserFiles`](#Project.UserFiles)                                 | Gets the path of the user files folder of current project.                                                                                |
| [`VisibleProperties`](#Project.VisibleProperties)                 | Gets the list of properties that are visible for this object.                                                                             |

<a id="property-detail"></a>

## Property detail

<a id="Project.AttachedRefs"></a>

### *property* Project.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Author"></a>

### *property* Project.Author *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

<a id="Project.Children"></a>

### *property* Project.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Project.ClsId"></a>

### *property* Project.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Comments"></a>

### *property* Project.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationDate"></a>

### *property* Project.CreationDate *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CreationDate.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreationTime"></a>

### *property* Project.CreationTime *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CreationTime.

<!-- !! processed by numpydoc !! -->

<a id="Project.DataModelObjectCategory"></a>

### *property* Project.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Project.EngineeringDataLibrary"></a>

### *property* Project.EngineeringDataLibrary *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

EngineeringDataLibrary property.

<!-- !! processed by numpydoc !! -->

<a id="Project.FilePath"></a>

### *property* Project.FilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Mechanical Project file path of current Mechanical session.

<!-- !! processed by numpydoc !! -->

<a id="Project.FirstSaved"></a>

### *property* Project.FirstSaved *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FirstSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupingFolder"></a>

### *property* Project.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Project.IconName"></a>

### *property* Project.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Images"></a>

### *property* Project.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedSource"></a>

### *property* Project.ImportedSource *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImportedSource.

<!-- !! processed by numpydoc !! -->

<a id="Project.ImportedVersion"></a>

### *property* Project.ImportedVersion *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ImportedVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.InternalObject"></a>

### *property* Project.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProjectAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Project.IsArchive"></a>

### *property* Project.IsArchive *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

For Mechanical opened independently, without Workbench. Returns True when working in an opened archive project, otherwise, returns False.

<!-- !! processed by numpydoc !! -->

<a id="Project.LastSaved"></a>

### *property* Project.LastSaved *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LastSaved.

<!-- !! processed by numpydoc !! -->

<a id="Project.Model"></a>

### *property* Project.Model *: [Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Model) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.Models"></a>

### *property* Project.Models *: Iterable[[Ansys.ACT.Automation.Mechanical.Model](Model.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Model)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Model.

<!-- !! processed by numpydoc !! -->

<a id="Project.Name"></a>

### *property* Project.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Project.ObjectId"></a>

### *property* Project.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Project.ObjectState"></a>

### *property* Project.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Project.ObjectTags"></a>

### *property* Project.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Project.OriginalArchiveFile"></a>

### *property* Project.OriginalArchiveFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

For Mechanical opened independently, without Workbench. Returns the original archive file path opened in current session.

<!-- !! processed by numpydoc !! -->

<a id="Project.Parent"></a>

### *property* Project.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Project.PreparedFor"></a>

### *property* Project.PreparedFor *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PreparedFor.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProductVersion"></a>

### *property* Project.ProductVersion *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ProductVersion.

<!-- !! processed by numpydoc !! -->

<a id="Project.ProjectDirectory"></a>

### *property* Project.ProjectDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Project Directory

<!-- !! processed by numpydoc !! -->

<a id="Project.Properties"></a>

### *property* Project.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectAfterSolution"></a>

### *property* Project.SaveProjectAfterSolution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SaveProjectAfterSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveProjectBeforeSolution"></a>

### *property* Project.SaveProjectBeforeSolution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SaveProjectBeforeSolution.

<!-- !! processed by numpydoc !! -->

<a id="Project.State"></a>

### *property* Project.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Project.StateEngineMode"></a>

### *property* Project.StateEngineMode *: Ansys.Mechanical.DataModel.Enums.StateEngineMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Sets the State Engine Mode which controls validation

<!-- !! processed by numpydoc !! -->

<a id="Project.Subject"></a>

### *property* Project.Subject *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subject.

<!-- !! processed by numpydoc !! -->

<a id="Project.UnarchivedProjectFile"></a>

### *property* Project.UnarchivedProjectFile *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

For Mechanical opened independently, without Workbench. Returns the unarchived project file path of the current session.

<!-- !! processed by numpydoc !! -->

<a id="Project.UnitSystem"></a>

### *property* Project.UnitSystem *: [Ansys.Mechanical.DataModel.Enums.UserUnitSystemType](../../../Mechanical/DataModel/Enums/UserUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.UserUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Change the Unit System.

<!-- !! processed by numpydoc !! -->

<a id="Project.UserFiles"></a>

### *property* Project.UserFiles *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the path of the user files folder of current project.

<!-- !! processed by numpydoc !! -->

<a id="Project.VisibleProperties"></a>

### *property* Project.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Project.Activate"></a>

### Project.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddComment"></a>

### Project.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Project.AddImage"></a>

### Project.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.AddMaterial"></a>

### Project.AddMaterial(url: [str](https://docs.python.org/3/builtins/stdtypes.html#str), urn: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Add a material from a file to the project.

<!-- !! processed by numpydoc !! -->

<a id="Project.Archive"></a>

### Project.Archive(archivePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/builtins/functions.html#bool), settings: [Ansys.ACT.Automation.Mechanical.ArchiveSettings](ArchiveSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ArchiveSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Archive a Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.BackupExists"></a>

### Project.BackupExists() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

BackupExists method.

<!-- !! processed by numpydoc !! -->

<a id="Project.BackupRemove"></a>

### Project.BackupRemove() → [None](https://docs.python.org/3/builtins/constants.html#None)

BackupRemove method.

<!-- !! processed by numpydoc !! -->

<a id="Project.BackupRestore"></a>

### Project.BackupRestore() → [None](https://docs.python.org/3/builtins/constants.html#None)

BackupRestore method.

<!-- !! processed by numpydoc !! -->

<a id="Project.BackupSaveAsCopy"></a>

### Project.BackupSaveAsCopy(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

BackupSaveAsCopy method.

<!-- !! processed by numpydoc !! -->

<a id="Project.ClearGeneratedData"></a>

### Project.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Project.CombineTextFiles"></a>

### Project.CombineTextFiles(PrimaryFileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), SecondaryFileName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Combines two text(.txt / .dmig / .inp / .dat) files. The secondary file will be appened to the primary file

<!-- !! processed by numpydoc !! -->

<a id="Project.Copy"></a>

### Project.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Project.CopyTo"></a>

### Project.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreateObjRef"></a>

### Project.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Project.CreateParameter"></a>

### Project.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Project.Cut"></a>

### Project.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Project.DetermineStandaloneAppletModeFromArchive"></a>

### *classmethod* Project.DetermineStandaloneAppletModeFromArchive(archiveFile: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

DetermineStandaloneAppletModeFromArchive method.

<!-- !! processed by numpydoc !! -->

<a id="Project.Duplicate"></a>

### Project.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Project.Equals"></a>

### Project.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Project.ExportReferenceManagerDataXML"></a>

### Project.ExportReferenceManagerDataXML(outputFilePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ignoreSuppressed: [bool](https://docs.python.org/3/builtins/functions.html#bool), ignoreInvalid: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportReferenceManagerDataXML method.

<!-- !! processed by numpydoc !! -->

<a id="Project.ExportToMechdat"></a>

### Project.ExportToMechdat(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export the current project to a mechdat file.

<!-- !! processed by numpydoc !! -->

<a id="Project.ForceUnlock"></a>

### Project.ForceUnlock(projectFilePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ForceUnlock method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetAPIName"></a>

### Project.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetAllProperties"></a>

### Project.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetCanonicalProjectPath"></a>

### Project.GetCanonicalProjectPath(sourcePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetCanonicalProjectPath method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetChildren"></a>

### Project.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Project.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetDetailsView"></a>

### Project.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetEnumName"></a>

### Project.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Project.GetHashCode"></a>

### Project.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetIconFile"></a>

### Project.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetLifetimeService"></a>

### Project.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetObjectData"></a>

### Project.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetParameter"></a>

### Project.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetPath"></a>

### Project.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetPropertyName"></a>

### Project.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetPropertyValue"></a>

### Project.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetVisibleProperties"></a>

### Project.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GetVisiblePropertyNames"></a>

### Project.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupAllSimilarChildren"></a>

### Project.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Project.GroupSimilarObjects"></a>

### Project.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Project.InitializeLifetimeService"></a>

### Project.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Project.IsPropertyEditable"></a>

### Project.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Project.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Project.IsPropertyVisible"></a>

### Project.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Project.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Project.New"></a>

### Project.New() → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Start a new Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.Open"></a>

### Project.Open(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Open an existing Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.Paste"></a>

### Project.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByAPIName"></a>

### Project.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyById"></a>

### Project.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Project.PropertyByName"></a>

### Project.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Project.RemoveDuplicateBodies"></a>

### Project.RemoveDuplicateBodies() → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes dupliate bodies from the tree.

<!-- !! processed by numpydoc !! -->

<a id="Project.RemoveFromGroup"></a>

### Project.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Project.RemoveParameter"></a>

### Project.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Project.ResetArchiveData"></a>

### Project.ResetArchiveData() → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Resets the cached file path data for opening an archived project file.

<!-- !! processed by numpydoc !! -->

<a id="Project.Save"></a>

### Project.Save() → [None](https://docs.python.org/3/builtins/constants.html#None)

### Project.Save(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Save current Mechanical project.

<!-- !! processed by numpydoc !! -->

<a id="Project.SaveAs"></a>

### Project.SaveAs(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

For Mechanical opened independently, without Workbench. Save current Mechanical project to given filePath.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInCelsius"></a>

### Project.SpecifyMetricTemperatureInCelsius() → [None](https://docs.python.org/3/builtins/constants.html#None)

Specify the use of Celsius thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.SpecifyMetricTemperatureInKelvin"></a>

### Project.SpecifyMetricTemperatureInKelvin() → [None](https://docs.python.org/3/builtins/constants.html#None)

Specify the use of Kelvin thermal units for metric unit systems.

<!-- !! processed by numpydoc !! -->

<a id="Project.Unarchive"></a>

### Project.Unarchive(archivePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), projectPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), overwrite: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

```text
For Mechanical opened independently, without Workbench. Unarchive a Mechanical project and open it.
If projectPath is provided, the project will be unarchived to this given projectPath.
If projectPath is not provided or is null or empty, the project will be unarchived to a temporary folder.
Returns a path to the unarchived project database file.
```

<!-- !! processed by numpydoc !! -->

<a id="Project.ValidateStateEngine"></a>

### Project.ValidateStateEngine() → [None](https://docs.python.org/3/builtins/constants.html#None)

Runs a full state engine validation of the tree

<!-- !! processed by numpydoc !! -->

