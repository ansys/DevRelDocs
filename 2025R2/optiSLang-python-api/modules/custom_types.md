

### *class* custom_types.HidSpecificInputData

An aggregate of input arguments per hid.


#### \_\_init_\_()


#### *property* hid

Hierarchical  ID of a design variation, for example, [0.99.4]


#### *property* input_file

Input file.


#### *property* input_file_encoding

Input file encoding.


#### *property* input_slot_values

A dict where slot names are keys and items are the slot values.


#### *property* osl_variables

A dict where the keys are optiSLang application specific variables names and items their respective values.


#### *property* reference_file

Reference file.


#### *property* reference_file_encoding

Reference file encoding.


#### *property* reference_file_is_relative_to_working_directory

Whether “reference_file” is specified relative to working directory.


#### *property* working_dir_hierarchy

The nodes working directory hierarchy.


#### *property* working_directory

String. The nodes working directory.


### *class* custom_types.HidSpecificInputDataIntegrations


#### \_\_init_\_()


#### *property* parameter_values

Parameter values of a specific HId.


### *class* custom_types.HidSpecificOutputData

An aggregate of output arguments per hid.


#### \_\_init_\_()

#### \_\_init_\_(arg2: [HID](id.md#id.HID))

#### \_\_init_\_(arg2: [HID](id.md#id.HID), arg3: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(arg2: [HidSpecificInputData](#custom_types.HidSpecificInputData))

#### \_\_init_\_(arg2: [HidSpecificInputData](#custom_types.HidSpecificInputData), arg3: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

[5] Create a HidSpecificOutputData instance.

[6] Create a HidSpecificOutputData instance.


#### *property* hid

Hierarchical  ID of a design variation, for example, [0.99.4]


#### *property* output_slot_values

A dict where keys are the output slot names and items are the output slot values.


#### *property* status

RunStatus object.


### *class* custom_types.HidSpecificOutputDataIntegrations

An aggregate of output arguments per hid. Specialization for integration node.


#### \_\_init_\_()

#### \_\_init_\_(hid: [HID](id.md#id.HID))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData))

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict, response_values: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict, response_values: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → object

[1] Create a HidSpecificOutputDataIntegrations instance.

[2] Create a HidSpecificOutputDataIntegrations instance.

[3] Create a HidSpecificOutputDataIntegrations instance.

[4] Create a HidSpecificOutputDataIntegrations instance.

[5] Create a HidSpecificOutputDataIntegrations instance.

[6] Create a HidSpecificOutputDataIntegrations instance.

[7] Create a HidSpecificOutputDataIntegrations instance.

[8] Create a HidSpecificOutputDataIntegrations instance.


#### *property* adapted_parameter_values

Adapted parameter values of a specific HId.


#### *property* responses

Response values of a specific HId.


### *class* custom_types.HidSpecificOutputDataMop

An aggregate of output arguments per hid. Specialization for MOP node.


#### \_\_init_\_()

#### \_\_init_\_(hid: [HID](id.md#id.HID))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData))

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict, resulting_parameter_manager: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict, resulting_parameter_manager: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)) → object

[1] Create a HidSpecificOutputDataMop instance.

[2] Create a HidSpecificOutputDataMop instance.

[3] Create a HidSpecificOutputDataMop instance.

[4] Create a HidSpecificOutputDataMop instance.

[5] Create a HidSpecificOutputDataMop instance.

[6] Create a HidSpecificOutputDataMop instance.

[7] Create a HidSpecificOutputDataMop instance.

[8] Create a HidSpecificOutputDataMop instance.


#### *property* resulting_parameter_manager

A class for managing parameters.


### *class* custom_types.InputDefinition

Defining the inputs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))


#### *property* discrete_states

None or a list of design entries.


#### *property* lower_bound

The lower bound or None.


#### *property* mean

The value’s mean or None.


#### *property* random_variable_type

The random variable’s type or None.


#### *property* standard_deviation

The standard deviation or None.


#### *property* upper_bound

The upper bound or None.


### *class* custom_types.OutputDefinition

Defining the outputs.


#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))


### *class* custom_types.RunStatus

An object for documenting success and loggin purpose.


#### \_\_init_\_()

#### \_\_init_\_(arg2: bool)

#### \_\_init_\_(arg2: bool, arg3: str)


#### *property* message

Message for logging purpose.


#### *property* success

Flag for documenting success.


### *class* custom_types.ValueDefinition

Common base for InputValueDefintion and OutputDefinition


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### *property* additional_data

Extend the list view of detected inputs and outputs by additional columns                                                                                   where “key” is the column headers and “item” is the corresponding field value.                                                                                   A tree structure for grouping the data can be build here as well:                                                                                   Providing “”entry_n” : “ANodeLabel””, where n can be 1-9, the current ValueDefinition is                                                                                   assigned to the specified group.


#### *property* name


#### *property* value
