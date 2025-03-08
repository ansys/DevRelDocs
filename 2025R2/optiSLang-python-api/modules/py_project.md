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



### *class* py_project.OSLFileProvider


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_project.Project


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### assign_placeholder(actor_uuid: [UUID](id.md#id.UUID), property_id: str, placeholder_id: str)

Assign a placeholder in this project.


# Parameters

actor_uuid
: Unique id to the actor

property_id
: Property ID.

placeholder_id
: Placeholder ID.


# Raises

RuntimeError
: Raised when placeholder does not exist, or
  when property does not exist, or
  when placeholder type and property type does not match.


#### create_placeholder_from_actor_property(actor_uuid: UUID, property_id: str) → str

Create placeholder from actor property with new id if id already exist


# Parameters

actor_uuid
: Unique id to the actor.

property_id
: Name of the actor property.

create_as_expression
: Decide if the placeholder is created as value or as macro expression. False by default.


# Returns

str
: Actual ID of the generated placeholder.


# Raises

RuntimeError
: Raised when property id is not accessible at actor.


#### get_actions() → [ProjectActions](#py_project.ProjectActions)

Get defined actions for project.


#### get_file_provider() → [OSLFileProvider](#py_project.OSLFileProvider)

Get central file registration for project.


#### get_maximum_threads() → int

Get the maximum number of threads used by this project.


#### get_placeholder(placeholder_id: str) → dict

Get placeholder by id from this project as dict.


# Parameters

placeholder_id
: Placeholder ID.


# Returns

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


# Raises

RuntimeError
: Raised when the placeholder does not exist.


#### get_placeholder_ids() → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

Get placeholder ids from this project.


# Returns

list
: List of placeholder ids.


#### get_protocol_file_path() → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)

Get the path of the protocol file.


#### get_root_system() → [RunnableSystem](_optiSLang_Actors.md#optiSLang_Actors.RunnableSystem)

Get root system.


#### get_run_scenario() → [ProjectRunScenario](#py_project.ProjectRunScenario)

Get run scenario for project.


#### get_state() → [ProjectStatus](#py_project.ProjectStatus)

Get state of project.


#### *property* name

The project’s name as displayed.


#### *property* project_dir

The project directory. Empty string if the project has not yet been saved.


#### *property* project_path

The project file path. Empty string if the project has not yet been saved.


#### *property* project_working_dir

The project working dir path. Empty string if the project has not yet been saved.


#### *property* reference_files_dir

The reference files directory path.


#### remove_placeholder(placeholder_id: str)

Remove a placeholder from this project.


# Parameters

placeholder_id
: Placeholder ID.


#### rename_placeholder(existing_placdeholder_id: str, new_placdeholder_id: str)

Rename a placeholder in this project.


# Parameters

placeholder_id
: Placeholder ID.

new_placeholder_id
: New placeholder ID.


# Raises

RuntimeError
: Raised when placeholder does not exist.


#### set_actions(actions: [ProjectActions](#py_project.ProjectActions))

Set defined actions for project.


#### set_maximum_threads(num_threads: int)

Get the maximum number of threads used by this project.


#### set_placeholder(, name: object=None [, user_level: object=None [, description: object=None [, range: object=None [, value: object=None [, value_type: object=None [, expression: object=None [, overwrite: bool=False]]]]]]]]) → str

Create a new placeholder or overwrite an existing one.


# Parameters

name
: Placeholder ID. In case of creating a new placeholder, the ID may be adapted to maintain ID uniqueness. None by default.

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


# Returns

str
: Actual ID of the generated/modified placeholder.


# Raises

RuntimeError
: Raised when the placeholder cannot be created/modified.


#### *property* settings

Project settings.


#### unassign_placeholder(actor_uuid: UUID, placeholder: str id)

Remove a placeholder assignment in this project.


# Parameters

actor_uuid
: Unique id to the actor

property_id
: Property ID.


### *class* py_project.ProjectAction


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### *property* name

Action name.


#### *property* point

Action point.


#### type() → [ProjectActionType](#py_project.ProjectActionType)

Action type.


### *class* py_project.ProjectActionList


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push(action: [ProjectAction](#py_project.ProjectAction))


#### size() → int


### *class* py_project.ProjectActionPoint

**Enumeration**

Enumerates possible project action points.


#### PROJECT_ACTION_POINT_ANY *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ANY*


#### PROJECT_ACTION_POINT_NONE *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_NONE*


#### PROJECT_ACTION_POINT_ON_PROJECT_ABOUT_TO_START *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_ABOUT_TO_START*


#### PROJECT_ACTION_POINT_ON_PROJECT_OPEN *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPEN*


#### PROJECT_ACTION_POINT_ON_PROJECT_OPENED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_OPENED*


#### PROJECT_ACTION_POINT_ON_PROJECT_SAVE *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVE*


#### PROJECT_ACTION_POINT_ON_PROJECT_SAVED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_SAVED*


#### PROJECT_ACTION_POINT_ON_PROJECT_STARTED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STARTED*


#### PROJECT_ACTION_POINT_ON_PROJECT_STOPPED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOPPED*


#### PROJECT_ACTION_POINT_ON_PROJECT_STOP_REQUESTED *= py_project.ProjectActionPoint.PROJECT_ACTION_POINT_ON_PROJECT_STOP_REQUESTED*


### *class* py_project.ProjectActionRunScript


#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: str, arg4: [ProjectActionPoint](#py_project.ProjectActionPoint))


#### *property* script

Script content to execute.


### *class* py_project.ProjectActionRunScriptFile


#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: [ProvidedPath](py_file_access.md#py_file_access.ProvidedPath), arg4: [ProjectActionPoint](#py_project.ProjectActionPoint))


#### *property* script

Script file to execute.


### *class* py_project.ProjectActionType

**Enumeration**

Enumerates possible project action types.


#### PROJECT_ACTION_RUN_SCRIPT *= py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT*


#### PROJECT_ACTION_RUN_SCRIPT_FILE *= py_project.ProjectActionType.PROJECT_ACTION_RUN_SCRIPT_FILE*


### *class* py_project.ProjectActions


#### \_\_init_\_()


#### *property* actions

Actions container.


#### contains(name: str) → bool

Test if action exists.


#### register(action: [ProjectAction](#py_project.ProjectAction)) → bool

Register project action.


#### unique_name(base: str) → str

Get unique action name.


#### unregister(name: str) → bool

Unregister project action by name.


### *class* py_project.ProjectFilenameEscape

**Enumeration**

Enumerates possible filename escape modes.


#### PROJECT_FE_FULL *= py_project.ProjectFilenameEscape.PROJECT_FE_FULL*


#### PROJECT_FE_RESERVED_ONLY *= py_project.ProjectFilenameEscape.PROJECT_FE_RESERVED_ONLY*


### *class* py_project.ProjectRunScenario

**Enumeration**

Enumerates possible project run scenarios.


#### PROJECT_RUN_SCENARIO_ABORTED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_ABORTED*


#### PROJECT_RUN_SCENARIO_FINISHED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_FINISHED*


#### PROJECT_RUN_SCENARIO_MODIFIED_ALL *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_ALL*


#### PROJECT_RUN_SCENARIO_MODIFIED_SOME *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_MODIFIED_SOME*


#### PROJECT_RUN_SCENARIO_PARTIAL *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PARTIAL*


#### PROJECT_RUN_SCENARIO_PAUSED *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PAUSED*


#### PROJECT_RUN_SCENARIO_PRISTINE *= py_project.ProjectRunScenario.PROJECT_RUN_SCENARIO_PRISTINE*


### *class* py_project.ProjectSettings


#### \_\_init_\_()


#### *property* actors_ignore_predecessor_failure

Actors ignore predecessor failure flag.


#### *property* auto_save_enabled

Auto save enabled flag.


#### *property* custom_location

Custom working directory location.


#### *property* filename_escape_mode

Filename escape mode.


#### *property* hide_number_of_message_queue_threads_warning

Hide number of message queue threads warning flag.


#### *property* maximum_auto_relocation_depth

Maximum auto relocation depth.


#### *property* number_of_message_queue_threads

Number of message queue threads.


#### *property* project_actions

Project actions.


#### *property* project_id

Project id.


#### *property* project_manager_id

Project manager id.


#### *property* purge_on_save

Purge on save flag.


#### *property* reference_files_directory_name

Reference files directory name.


#### *property* remove_empty_directories_on_purge

Remove empty directories on purge flag.


#### *property* short_description

Project short description.


#### *property* show_conditional_exec_ui

Conditional execution ui visibility flag.


#### *property* show_environment_ui

Environment ui visibility flag.


#### *property* show_files_ui

Files ui visibility flag.


#### *property* show_placeholders_ui

Placeholders ui visibility flag.


#### *property* show_run_options_ui

Run options ui visibility flag.


#### *property* show_variables_ui

Variables ui visibility flag.


#### *property* working_data_storage

Working data storage mode.


#### *property* working_directory_location

Working directory location.


### *class* py_project.ProjectStatus

**Enumeration**

Enumerates possible project states.


#### PROJECT_STATUS_ABORTED *= py_project.ProjectStatus.PROJECT_STATUS_ABORTED*


#### PROJECT_STATUS_ABORT_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_ABORT_REQUESTED*


#### PROJECT_STATUS_FINISHED *= py_project.ProjectStatus.PROJECT_STATUS_FINISHED*


#### PROJECT_STATUS_IDLE *= py_project.ProjectStatus.PROJECT_STATUS_IDLE*


#### PROJECT_STATUS_PAUSED *= py_project.ProjectStatus.PROJECT_STATUS_PAUSED*


#### PROJECT_STATUS_PAUSE_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_PAUSE_REQUESTED*


#### PROJECT_STATUS_PROCESSING *= py_project.ProjectStatus.PROJECT_STATUS_PROCESSING*


#### PROJECT_STATUS_STOPPED *= py_project.ProjectStatus.PROJECT_STATUS_STOPPED*


#### PROJECT_STATUS_STOP_REQUESTED *= py_project.ProjectStatus.PROJECT_STATUS_STOP_REQUESTED*


### *class* py_project.ProjectWorkingDataStorage

**Enumeration**

Enumerates possible project working data storage modes.


#### PROJECT_WDL_EXTERNAL *= py_project.ProjectWorkingDataStorage.PROJECT_WDL_EXTERNAL*


#### PROJECT_WDS_EMBEDDED *= py_project.ProjectWorkingDataStorage.PROJECT_WDS_EMBEDDED*


### *class* py_project.ProjectWorkingDirectoryLocation

**Enumeration**

Enumerates possible project working diretory locations.


#### PROJECT_WDL_ALONGSIDE_PROJECT *= py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_ALONGSIDE_PROJECT*


#### PROJECT_WDL_CUSTOM *= py_project.ProjectWorkingDirectoryLocation.PROJECT_WDL_CUSTOM*
