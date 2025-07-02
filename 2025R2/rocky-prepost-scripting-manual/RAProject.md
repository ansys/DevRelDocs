

# RAProject

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAProject"></a>

### *class* RAProject

Rocky PrePost Scripting wrapper for a project.

The [`RAProject`](#generated.RAProject) class serves as the main access point for a project’s [`RAStudy`](RAStudy.md#generated.RAStudy)
and the project entities that aren’t directly related to a simulation’s configuration, such as
the time filter, the collection of user processes, etc.

The [`RAProject`](#generated.RAProject) can be obtained directly via the app global object. Example usage:

```python
project = app.CreateProject()
study = project.GetStudy()
user_processes = project.GetUserProcessCollection()
input_variables = project.GetInputVariables()

project.SaveProject('my_project.rocky')
project.SaveProjectForRestart('my_restart_project.rocky', timestep_or_index=10)
```

**Methods:**

| [`CloseProject`](#generated.RAProject.CloseProject)([check_save_state])                | Close the current project.                                                       |
|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`CreateStudy`](#generated.RAProject.CreateStudy)([study_name])                        | Creates a new study and returns its wrapper                                      |
| [`GetInputVariables`](#generated.RAProject.GetInputVariables)()                        | Get the PrePost Scripting wrapper for the project's Input Variables.             |
| [`GetModelElement`](#generated.RAProject.GetModelElement)(model_element_id)            | Get the model element associated with the given ID                               |
| [`GetModelStudy`](#generated.RAProject.GetModelStudy)(model_item)                      | Get the study model associated with a given model item                           |
| [`GetParametricVariables`](#generated.RAProject.GetParametricVariables)()              | Get the PrePost Scripting wrapper for the project's Parametric Variables.        |
| [`GetProjectFilename`](#generated.RAProject.GetProjectFilename)()                      | Get the current project's filename.                                              |
| [`GetStudy`](#generated.RAProject.GetStudy)([study_name])                              | Get the project's Study.                                                         |
| [`GetTimeFilter`](#generated.RAProject.GetTimeFilter)()                                | Utility function to return the api object representing the project's time filter |
| [`GetUserProcessCollection`](#generated.RAProject.GetUserProcessCollection)()          | Get the project's collection of User Processes.                                  |
| [`RemoveProcess`](#generated.RAProject.RemoveProcess)(process)                         | Removes the given process from the project.                                      |
| [`SaveProject`](#generated.RAProject.SaveProject)([filename])                          | Save the currently opened project.                                               |
| [`SaveProjectForRestart`](#generated.RAProject.SaveProjectForRestart)(filename[, ...]) | Create a new restart project from the current project.                           |

<a id="generated.RAProject.CloseProject"></a>

#### CloseProject(check_save_state: bool = True)

Close the current project.

* **Parameters:**
  **check_save_state** – If False, it will close without asking the user to save it first.

<a id="generated.RAProject.CreateStudy"></a>

#### CreateStudy(study_name: str | None = None)

Creates a new study and returns its wrapper

* **Parameters:**
  **study_name** – The name of the study

<a id="generated.RAProject.GetInputVariables"></a>

#### GetInputVariables()

Get the PrePost Scripting wrapper for the project’s Input Variables.

<a id="generated.RAProject.GetModelElement"></a>

#### GetModelElement(model_element_id)

Get the model element associated with the given ID

* **Parameters:**
  **model_element_id** (*unicode*) – The element id

@return
: The wrapped object with the given ID

<a id="generated.RAProject.GetModelStudy"></a>

#### *classmethod* GetModelStudy(model_item)

Get the study model associated with a given model item

* **Parameters:**
  **model_item** (*Subject*) – A study child

@return RAStudy or None if no study was found for the given element

<a id="generated.RAProject.GetParametricVariables"></a>

#### GetParametricVariables()

Get the PrePost Scripting wrapper for the project’s Parametric Variables.

<a id="generated.RAProject.GetProjectFilename"></a>

#### GetProjectFilename()

Get the current project’s filename.

* **Returns:**
  The current project’s file name, or None if there is no current project or if the
  project hasn’t been saved yet.

<a id="generated.RAProject.GetStudy"></a>

#### GetStudy(study_name: str | None = None)

Get the project’s Study.

* **Parameters:**
  **study_name** – The name of the study
  If None is given the first model will be returned

<a id="generated.RAProject.GetTimeFilter"></a>

#### GetTimeFilter()

Utility function to return the api object representing the project’s time filter

<a id="generated.RAProject.GetUserProcessCollection"></a>

#### GetUserProcessCollection()

Get the project’s collection of User Processes.

<a id="generated.RAProject.RemoveProcess"></a>

#### RemoveProcess(process: RAGridProcessElementItem | str)

Removes the given process from the project.

* **Parameters:**
  **process** – a process or process name

<a id="generated.RAProject.SaveProject"></a>

#### SaveProject(filename: str | None = None)

Save the currently opened project.

* **Parameters:**
  **filename** – The name of the file to save the project or None if to update the current file

<a id="generated.RAProject.SaveProjectForRestart"></a>

#### SaveProjectForRestart(filename: str, timestep_or_index: TimeStep | int | None = None)

Create a new restart project from the current project.

* **Parameters:**
  * **filename** – The new filename to be saved.
  * **timestep_or_index** – Either the index of the timestep, or the timestep itself, in which to create the restart
    project. If None is passed, the application’s current timestep will be used.
