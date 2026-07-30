# custom_types

<a id="custom_types.HidSpecificInputData"></a>

## *class* custom_types.HidSpecificInputData

An aggregate of input arguments per hid.

<a id="custom_types.HidSpecificInputData.__init__"></a>

#### \_\_init_\_()

<a id="custom_types.HidSpecificInputData.hid"></a>

#### *property* hid

Hierarchical  ID of a design variation, for example, [0.99.4]

<a id="custom_types.HidSpecificInputData.input_file"></a>

#### *property* input_file

Input file.

<a id="custom_types.HidSpecificInputData.input_file_encoding"></a>

#### *property* input_file_encoding

Input file encoding.

<a id="custom_types.HidSpecificInputData.input_slot_values"></a>

#### *property* input_slot_values

A dict where slot names are keys and items are the slot values.

<a id="custom_types.HidSpecificInputData.osl_variables"></a>

#### *property* osl_variables

A dict where the keys are optiSLang application specific variables names and items their respective values.

<a id="custom_types.HidSpecificInputData.reference_file"></a>

#### *property* reference_file

Reference file.

<a id="custom_types.HidSpecificInputData.reference_file_encoding"></a>

#### *property* reference_file_encoding

Reference file encoding.

<a id="custom_types.HidSpecificInputData.reference_file_is_relative_to_working_directory"></a>

#### *property* reference_file_is_relative_to_working_directory

Whether “reference_file” is specified relative to working directory.

<a id="custom_types.HidSpecificInputData.working_dir_hierarchy"></a>

#### *property* working_dir_hierarchy

The nodes working directory hierarchy.

<a id="custom_types.HidSpecificInputData.working_directory"></a>

#### *property* working_directory

String. The nodes working directory.

<a id="custom_types.HidSpecificInputDataIntegrations"></a>

## *class* custom_types.HidSpecificInputDataIntegrations

<a id="custom_types.HidSpecificInputDataIntegrations.__init__"></a>

#### \_\_init_\_()

<a id="custom_types.HidSpecificInputDataIntegrations.parameter_values"></a>

#### *property* parameter_values

Parameter values of a specific HId.

<a id="custom_types.HidSpecificOutputData"></a>

## *class* custom_types.HidSpecificOutputData

An aggregate of output arguments per hid.

<a id="custom_types.HidSpecificOutputData.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [HID](id.md#id.HID))

#### \_\_init_\_(arg2: [HID](id.md#id.HID), arg3: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(arg2: [HidSpecificInputData](#custom_types.HidSpecificInputData))

#### \_\_init_\_(arg2: [HidSpecificInputData](#custom_types.HidSpecificInputData), arg3: [RunStatus](#custom_types.RunStatus))

#### \_\_init_\_(hid: [HID](id.md#id.HID), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

#### \_\_init_\_(input_data: [HidSpecificInputData](#custom_types.HidSpecificInputData), run_status: [RunStatus](#custom_types.RunStatus), output_slot_values: dict) → object

[5] Create a HidSpecificOutputData instance.

[6] Create a HidSpecificOutputData instance.

<a id="custom_types.HidSpecificOutputData.hid"></a>

#### *property* hid

Hierarchical  ID of a design variation, for example, [0.99.4]

<a id="custom_types.HidSpecificOutputData.output_slot_values"></a>

#### *property* output_slot_values

A dict where keys are the output slot names and items are the output slot values.

<a id="custom_types.HidSpecificOutputData.status"></a>

#### *property* status

RunStatus object.

<a id="custom_types.HidSpecificOutputDataIntegrations"></a>

## *class* custom_types.HidSpecificOutputDataIntegrations

An aggregate of output arguments per hid. Specialization for integration node.

<a id="custom_types.HidSpecificOutputDataIntegrations.__init__"></a>

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

<a id="custom_types.HidSpecificOutputDataIntegrations.adapted_parameter_values"></a>

#### *property* adapted_parameter_values

Adapted parameter values of a specific HId.

<a id="custom_types.HidSpecificOutputDataIntegrations.responses"></a>

#### *property* responses

Response values of a specific HId.

<a id="custom_types.HidSpecificOutputDataMop"></a>

## *class* custom_types.HidSpecificOutputDataMop

An aggregate of output arguments per hid. Specialization for MOP node.

<a id="custom_types.HidSpecificOutputDataMop.__init__"></a>

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

<a id="custom_types.HidSpecificOutputDataMop.resulting_parameter_manager"></a>

#### *property* resulting_parameter_manager

A class for managing parameters.

<a id="custom_types.InputDefinition"></a>

## *class* custom_types.InputDefinition

Defining the inputs.

<a id="custom_types.InputDefinition.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

<a id="custom_types.InputDefinition.discrete_states"></a>

#### *property* discrete_states

None or a list of design entries.

<a id="custom_types.InputDefinition.lower_bound"></a>

#### *property* lower_bound

The lower bound or None.

<a id="custom_types.InputDefinition.mean"></a>

#### *property* mean

The value’s mean or None.

<a id="custom_types.InputDefinition.random_variable_type"></a>

#### *property* random_variable_type

The random variable’s type or None.

<a id="custom_types.InputDefinition.standard_deviation"></a>

#### *property* standard_deviation

The standard deviation or None.

<a id="custom_types.InputDefinition.upper_bound"></a>

#### *property* upper_bound

The upper bound or None.

<a id="custom_types.OutputDefinition"></a>

## *class* custom_types.OutputDefinition

Defining the outputs.

<a id="custom_types.OutputDefinition.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

<a id="custom_types.RunStatus"></a>

## *class* custom_types.RunStatus

An object for documenting success and loggin purpose.

<a id="custom_types.RunStatus.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: bool)

#### \_\_init_\_(arg2: bool, arg3: str)

<a id="custom_types.RunStatus.message"></a>

#### *property* message

Message for logging purpose.

<a id="custom_types.RunStatus.success"></a>

#### *property* success

Flag for documenting success.

<a id="custom_types.ValueDefinition"></a>

## *class* custom_types.ValueDefinition

Common base for InputValueDefintion and OutputDefinition

<a id="custom_types.ValueDefinition.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="custom_types.ValueDefinition.additional_data"></a>

#### *property* additional_data

Extend the list view of detected inputs and outputs by additional columns                                                                                   where “key” is the column headers and “item” is the corresponding field value.                                                                                   A tree structure for grouping the data can be build here as well:                                                                                   Providing “”entry_n” : “ANodeLabel””, where n can be 1-9, the current ValueDefinition is                                                                                   assigned to the specified group.

<a id="custom_types.ValueDefinition.name"></a>

#### *property* name

<a id="custom_types.ValueDefinition.value"></a>

#### *property* value
