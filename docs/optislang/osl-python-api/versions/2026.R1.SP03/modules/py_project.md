# py_project

This module provides access to project settings.

Placeholders in project can be constructed in the following way (based on a oscillator example):

```default
# complete example in examples 02_python_examples/01_console/placeholders/create_oscillator_plus_placeholder.py
# reduced snippet with only one parameter

import py_placeholder

# create some placeholders
sensi = find_actor("oscillator")
project.create_placeholder_from_actor_property( actor_uuid = sensi.uuid, property_id = 'ParameterManager', create_as_expression = True )

project.set_placeholder( name='P_D_ref_val', user_level=py_placeholder.PLACEHOLDER_USERLEVEL_COMPUTATION_ENGINEER, value=0.02, value_type=py_placeholder.PLACEHOLDER_TYPE_REAL )
project.set_placeholder( name='P_D_lower_bound', user_level=py_placeholder.PLACEHOLDER_USERLEVEL_COMPUTATION_ENGINEER, value=0.01, value_type=py_placeholder.PLACEHOLDER_TYPE_REAL )
project.set_placeholder( name='P_D_upper_bound', user_level=py_placeholder.PLACEHOLDER_USERLEVEL_COMPUTATION_ENGINEER, value=0.03, value_type=py_placeholder.PLACEHOLDER_TYPE_REAL )

# Modify parameter manager
pm_expression_string = """
    {
    "parameter_container" :
    [
        {
            "deterministic_property" : {
                "domain_type" : { "value" : "real" },
                "kind" : { "value" : "continuous" },
                "lower_bound" : $(P_D_lower_bound),
                "upper_bound" : $(P_D_upper_bound)
            },
            "name" : "D",
            "reference_value" : $(P_D_ref_val),
            "type" : { "value" : "deterministic" }
        }
    ]
}"""
# Set placeholder expression for parameter manager back to project
project.set_placeholder( name = 'ParameterManager', overwrite = True, expression = pm_expression_string )
```

<a id="module-py_project"></a>

<a id="py_project.OSLFileProvider"></a>

## *class* py_project.OSLFileProvider

<a id="py_project.OSLFileProvider.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_project.Project"></a>

## *class* py_project.Project

<a id="py_project.Project.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_project.Project.assign_placeholder"></a>

#### assign_placeholder(actor_uuid: [UUID](id.md#id.UUID), property_id: str, placeholder_id: str)

Assign a placeholder in this project.

Parameters

actor_uuid
: Unique id to the actor

property_id
: Property ID.

placeholder_id
: Placeholder ID.

Raises

RuntimeError
: Raised when placeholder does not exist, or
  when property does not exist, or
  when placeholder type and property type does not match.

<a id="py_project.Project.create_placeholder_from_actor_property"></a>

#### create_placeholder_from_actor_property(actor_uuid: UUID, property_id: str) → str

Create placeholder from actor property with new id if id already exist

Parameters

actor_uuid
: Unique id to the actor.

property_id
: Name of the actor property.

create_as_expression
: Decide if the placeholder is created as value or as macro expression. False by default.

Returns

str
: Actual ID of the generated placeholder.

Raises

RuntimeError
: Raised when property id is not accessible at actor.

<a id="py_project.Project.get_actions"></a>

#### get_actions() → [ProjectActions](#py_project.ProjectActions)

Get defined actions for project.

<a id="py_project.Project.get_file_provider"></a>

#### get_file_provider() → [OSLFileProvider](#py_project.OSLFileProvider)

Get central file registration for project.

<a id="py_project.Project.get_maximum_threads"></a>

#### get_maximum_threads() → int

Get the maximum number of threads used by this project.

<a id="py_project.Project.get_placeholder"></a>

#### get_placeholder(placeholder_id: str) → dict

Get placeholder by id from this project as dict.

Parameters

placeholder_id
: Placeholder ID.

Returns

dict
name : str

> Placeholder ID.

user_level
: User level.

description
: Placeholder description.

range
: Placeholder range.

value
: Placeholder value. Datatype should match with the type argument.

type
: Placeholder type.

expression
: Placeholder macro expression.

Raises

RuntimeError
: Raised when the placeholder does not exist.

<a id="py_project.Project.get_placeholder_ids"></a>

#### get_placeholder_ids() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get placeholder ids from this project.

Returns

list
: List of placeholder ids.

<a id="py_project.Project.get_protocol_file_path"></a>

#### get_protocol_file_path() → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)

Get the path of the protocol file.

<a id="py_project.Project.get_root_system"></a>

#### get_root_system() → [RunnableSystem](_optiSLang_Actors.md#optiSLang_Actors.RunnableSystem)

Get root system.

<a id="py_project.Project.get_run_scenario"></a>

#### get_run_scenario() → [ProjectRunScenario](#py_project.ProjectRunScenario)

Get run scenario for project.

<a id="py_project.Project.get_state"></a>

#### get_state() → [ProjectStatus](#py_project.ProjectStatus)

Get state of project.

<a id="py_project.Project.name"></a>

#### *property* name

The project’s name as displayed.

<a id="py_project.Project.project_dir"></a>

#### *property* project_dir

The project directory. Empty string if the project has not yet been saved.

<a id="py_project.Project.project_path"></a>

#### *property* project_path

The project file path. Empty string if the project has not yet been saved.

<a id="py_project.Project.project_working_dir"></a>

#### *property* project_working_dir

The project working dir path. Empty string if the project has not yet been saved.

<a id="py_project.Project.reference_files_dir"></a>

#### *property* reference_files_dir

The reference files directory path.

<a id="py_project.Project.remove_placeholder"></a>

#### remove_placeholder(placeholder_id: str)

Remove a placeholder from this project.

Parameters

placeholder_id
: Placeholder ID.

<a id="py_project.Project.rename_placeholder"></a>

#### rename_placeholder(existing_placdeholder_id: str, new_placdeholder_id: str)

Rename a placeholder in this project.

Parameters

placeholder_id
: Placeholder ID.

new_placeholder_id
: New placeholder ID.

Raises

RuntimeError
: Raised when placeholder does not exist.

<a id="py_project.Project.set_actions"></a>

#### set_actions(actions: [ProjectActions](#py_project.ProjectActions))

Set defined actions for project.

<a id="py_project.Project.set_maximum_threads"></a>

#### set_maximum_threads(num_threads: int)

Get the maximum number of threads used by this project.

<a id="py_project.Project.set_placeholder"></a>

#### set_placeholder(, name: object=None [, user_level: object=None [, description: object=None [, range: object=None [, value: object=None [, value_type: object=None [, expression: object=None [, overwrite: bool=False]]]]]]]]) → str

Create a new placeholder or overwrite an existing one.

Parameters:
name : str, optional

> Placeholder ID. In case of creating a new placeholder, the ID may be adapted to maintain ID uniqueness. None by default.

user_level
: User level. py_placeholder.PLACEHOLDER_USERLEVEL_FLOW_ENGINEER by default.

description
: Placeholder description. None by default.

range
: Placeholder range. None by default.

value
: Placeholder value. Datatype should match with the type argument. Mutual exclusive with the expression argument. None by default

type
: Placeholder type. py_placeholder.PLACEHOLDER_TYPE_RAW by default.

expression
: Placeholder macro expression. Mutual exclusive with the value argument. None by default.

overwrite
: In case overwrite is True and placeholder is found by name, specified attributes will be overwritten. A new placeholder is created otherwise. False by default.

Returns

str
: Actual ID of the generated/modified placeholder.

Raises

RuntimeError
: Raised when the placeholder cannot be created/modified.

<a id="py_project.Project.settings"></a>

#### *property* settings

Project settings.

<a id="py_project.Project.unassign_placeholder"></a>

#### unassign_placeholder(actor_uuid: UUID, placeholder: str id)

Remove a placeholder assignment in this project.

Parameters

actor_uuid
: Unique id to the actor

property_id
: Property ID.

<a id="py_project.ProjectAction"></a>

## *class* py_project.ProjectAction

<a id="py_project.ProjectAction.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_project.ProjectAction.name"></a>

#### *property* name

Action name.

<a id="py_project.ProjectAction.point"></a>

#### *property* point

Action point.

<a id="py_project.ProjectAction.type"></a>

#### type() → [ProjectActionType](#py_project.ProjectActionType)

Action type.

<a id="py_project.ProjectActionList"></a>

## *class* py_project.ProjectActionList

<a id="py_project.ProjectActionList.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_project.ProjectActionList.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_project.ProjectActionList.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_project.ProjectActionList.__init__"></a>

#### \_\_init_\_()

<a id="py_project.ProjectActionList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_project.ProjectActionList.__len__"></a>

#### \_\_len_\_() → int

<a id="py_project.ProjectActionList.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_project.ProjectActionList.append"></a>

#### append(arg2: object)

<a id="py_project.ProjectActionList.extend"></a>

#### extend(arg2: object)

<a id="py_project.ProjectActionList.push"></a>

#### push(action: [ProjectAction](#py_project.ProjectAction))

<a id="py_project.ProjectActionList.size"></a>

#### size() → int

<a id="py_project.ProjectActionPoint"></a>

## *class* py_project.ProjectActionPoint

**Enumeration**

Enumerates possible project action points.

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ANY"></a>

#### PROJECT_ACTION_POINT_ANY *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ANY*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_NONE"></a>

#### PROJECT_ACTION_POINT_NONE *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_NONE*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_ABOUT_TO_START"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_ABOUT_TO_START *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_ABOUT_TO_START*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPEN"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_OPEN *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPEN*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPENED"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_OPENED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPENED*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVE"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_SAVE *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVE*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVED"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_SAVED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVED*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STARTED"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_STARTED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STARTED*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOPPED"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_STOPPED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOPPED*

<a id="py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOP_REQUESTED"></a>

#### PROJECT_ACTION_POINT_ON_PROJECT_STOP_REQUESTED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOP_REQUESTED*

<a id="py_project.ProjectActionRunScript"></a>

## *class* py_project.ProjectActionRunScript

<a id="py_project.ProjectActionRunScript.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: str, arg4: [ProjectActionPoint](#py_project.ProjectActionPoint))

<a id="py_project.ProjectActionRunScript.script"></a>

#### *property* script

Script content to execute.

<a id="py_project.ProjectActionRunScriptFile"></a>

## *class* py_project.ProjectActionRunScriptFile

<a id="py_project.ProjectActionRunScriptFile.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: [ProvidedPath](py_file_access.md#py_file_access.ProvidedPath), arg4: [ProjectActionPoint](#py_project.ProjectActionPoint))

<a id="py_project.ProjectActionRunScriptFile.script"></a>

#### *property* script

Script file to execute.

<a id="py_project.ProjectActionType"></a>

## *class* py_project.ProjectActionType

**Enumeration**

Enumerates possible project action types.

<a id="py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT"></a>

#### PROJECT_ACTION_RUN_SCRIPT *= py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT*

<a id="py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT_FILE"></a>

#### PROJECT_ACTION_RUN_SCRIPT_FILE *= py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT_FILE*

<a id="py_project.ProjectActions"></a>

## *class* py_project.ProjectActions

<a id="py_project.ProjectActions.__init__"></a>

#### \_\_init_\_()

<a id="py_project.ProjectActions.actions"></a>

#### *property* actions

Actions container.

<a id="py_project.ProjectActions.contains"></a>

#### contains(name: str) → bool

Test if action exists.

<a id="py_project.ProjectActions.register"></a>

#### register(action: [ProjectAction](#py_project.ProjectAction)) → bool

Register project action.

<a id="py_project.ProjectActions.unique_name"></a>

#### unique_name(base: str) → str

Get unique action name.

<a id="py_project.ProjectActions.unregister"></a>

#### unregister(name: str) → bool

Unregister project action by name.

<a id="py_project.ProjectFilenameEscape"></a>

## *class* py_project.ProjectFilenameEscape

**Enumeration**

Enumerates possible filename escape modes.

<a id="py_project.ProjectFilenameEscape.PROJECT_FE_FULL"></a>

#### PROJECT_FE_FULL *= py_project.ProjectFilenameEscape.PROJECT_FE_FULL*

<a id="py_project.ProjectFilenameEscape.PROJECT_FE_RESERVED_ONLY"></a>

#### PROJECT_FE_RESERVED_ONLY *= py_project.ProjectFilenameEscape.PROJECT_FE_RESERVED_ONLY*

<a id="py_project.ProjectRunScenario"></a>

## *class* py_project.ProjectRunScenario

**Enumeration**

Enumerates possible project run scenarios.

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_ABORTED"></a>

#### PROJECT_RUN_SCENARIO_ABORTED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_ABORTED*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_FINISHED"></a>

#### PROJECT_RUN_SCENARIO_FINISHED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_FINISHED*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_ALL"></a>

#### PROJECT_RUN_SCENARIO_MODIFIED_ALL *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_ALL*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_SOME"></a>

#### PROJECT_RUN_SCENARIO_MODIFIED_SOME *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_SOME*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PARTIAL"></a>

#### PROJECT_RUN_SCENARIO_PARTIAL *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PARTIAL*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PAUSED"></a>

#### PROJECT_RUN_SCENARIO_PAUSED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PAUSED*

<a id="py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PRISTINE"></a>

#### PROJECT_RUN_SCENARIO_PRISTINE *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PRISTINE*

<a id="py_project.ProjectSettings"></a>

## *class* py_project.ProjectSettings

<a id="py_project.ProjectSettings.__init__"></a>

#### \_\_init_\_()

<a id="py_project.ProjectSettings.actors_ignore_predecessor_failure"></a>

#### *property* actors_ignore_predecessor_failure

Actors ignore predecessor failure flag.

<a id="py_project.ProjectSettings.auto_save_enabled"></a>

#### *property* auto_save_enabled

Auto save enabled flag.

<a id="py_project.ProjectSettings.custom_location"></a>

#### *property* custom_location

Custom working directory location.

<a id="py_project.ProjectSettings.filename_escape_mode"></a>

#### *property* filename_escape_mode

Filename escape mode.

<a id="py_project.ProjectSettings.hide_number_of_message_queue_threads_warning"></a>

#### *property* hide_number_of_message_queue_threads_warning

Hide number of message queue threads warning flag.

<a id="py_project.ProjectSettings.maximum_auto_relocation_depth"></a>

#### *property* maximum_auto_relocation_depth

Maximum auto relocation depth.

<a id="py_project.ProjectSettings.number_of_message_queue_threads"></a>

#### *property* number_of_message_queue_threads

Number of message queue threads.

<a id="py_project.ProjectSettings.project_actions"></a>

#### *property* project_actions

Project actions.

<a id="py_project.ProjectSettings.project_id"></a>

#### *property* project_id

Project id.

<a id="py_project.ProjectSettings.project_manager_id"></a>

#### *property* project_manager_id

Project manager id.

<a id="py_project.ProjectSettings.purge_on_save"></a>

#### *property* purge_on_save

Purge on save flag.

<a id="py_project.ProjectSettings.reference_files_directory_name"></a>

#### *property* reference_files_directory_name

Reference files directory name.

<a id="py_project.ProjectSettings.remove_empty_directories_on_purge"></a>

#### *property* remove_empty_directories_on_purge

Remove empty directories on purge flag.

<a id="py_project.ProjectSettings.short_description"></a>

#### *property* short_description

Project short description.

<a id="py_project.ProjectSettings.show_conditional_exec_ui"></a>

#### *property* show_conditional_exec_ui

Conditional execution ui visibility flag.

<a id="py_project.ProjectSettings.show_environment_ui"></a>

#### *property* show_environment_ui

Environment ui visibility flag.

<a id="py_project.ProjectSettings.show_files_ui"></a>

#### *property* show_files_ui

Files ui visibility flag.

<a id="py_project.ProjectSettings.show_placeholders_ui"></a>

#### *property* show_placeholders_ui

Placeholders ui visibility flag.

<a id="py_project.ProjectSettings.show_run_options_ui"></a>

#### *property* show_run_options_ui

Run options ui visibility flag.

<a id="py_project.ProjectSettings.show_variables_ui"></a>

#### *property* show_variables_ui

Variables ui visibility flag.

<a id="py_project.ProjectSettings.working_data_storage"></a>

#### *property* working_data_storage

Working data storage mode.

<a id="py_project.ProjectSettings.working_directory_location"></a>

#### *property* working_directory_location

Working directory location.

<a id="py_project.ProjectStatus"></a>

## *class* py_project.ProjectStatus

**Enumeration**

Enumerates possible project states.

<a id="py_project.ProjectStatus.PROJECT_STATUS_ABORTED"></a>

#### PROJECT_STATUS_ABORTED *= py_project.ProjectStatus.PROJECT_STATUS_ABORTED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_ABORT_REQUESTED"></a>

#### PROJECT_STATUS_ABORT_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_ABORT_REQUESTED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_FINISHED"></a>

#### PROJECT_STATUS_FINISHED *= py_project.ProjectStatus.PROJECT_STATUS_FINISHED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_IDLE"></a>

#### PROJECT_STATUS_IDLE *= py_project.ProjectStatus.PROJECT_STATUS_IDLE*

<a id="py_project.ProjectStatus.PROJECT_STATUS_PAUSED"></a>

#### PROJECT_STATUS_PAUSED *= py_project.ProjectStatus.PROJECT_STATUS_PAUSED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_PAUSE_REQUESTED"></a>

#### PROJECT_STATUS_PAUSE_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_PAUSE_REQUESTED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_PROCESSING"></a>

#### PROJECT_STATUS_PROCESSING *= py_project.ProjectStatus.PROJECT_STATUS_PROCESSING*

<a id="py_project.ProjectStatus.PROJECT_STATUS_STOPPED"></a>

#### PROJECT_STATUS_STOPPED *= py_project.ProjectStatus.PROJECT_STATUS_STOPPED*

<a id="py_project.ProjectStatus.PROJECT_STATUS_STOP_REQUESTED"></a>

#### PROJECT_STATUS_STOP_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_STOP_REQUESTED*

<a id="py_project.ProjectWorkingDataStorage"></a>

## *class* py_project.ProjectWorkingDataStorage

**Enumeration**

Enumerates possible project working data storage modes.

<a id="py_project.ProjectWorkingDataStorage.PROJECT_WDL_EXTERNAL"></a>

#### PROJECT_WDL_EXTERNAL *= py_project.ProjectWorkingDataStorage.PROJECT_WDL_EXTERNAL*

<a id="py_project.ProjectWorkingDataStorage.PROJECT_WDS_EMBEDDED"></a>

#### PROJECT_WDS_EMBEDDED *= py_project.ProjectWorkingDataStorage.PROJECT_WDS_EMBEDDED*

<a id="py_project.ProjectWorkingDirectoryLocation"></a>

## *class* py_project.ProjectWorkingDirectoryLocation

**Enumeration**

Enumerates possible project working diretory locations.

<a id="py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_ALONGSIDE_PROJECT"></a>

#### PROJECT_WDL_ALONGSIDE_PROJECT *= py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_ALONGSIDE_PROJECT*

<a id="py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_CUSTOM"></a>

#### PROJECT_WDL_CUSTOM *= py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_CUSTOM*
