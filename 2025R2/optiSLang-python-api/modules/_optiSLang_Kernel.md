

### *class* \_optiSLang_Kernel.Actor

Base class of all actor classes


#### *class* SlotType

**Enumeration**


#### BOOL *= \_optiSLang_Kernel.SlotType.BOOL*


#### BOOL_VEC *= \_optiSLang_Kernel.SlotType.BOOL_VEC*


#### CRITERION *= \_optiSLang_Kernel.SlotType.CRITERION*


#### CRITERION_SEQ *= \_optiSLang_Kernel.SlotType.CRITERION_SEQ*


#### DESIGN *= \_optiSLang_Kernel.SlotType.DESIGN*


#### DESIGNENTRY *= \_optiSLang_Kernel.SlotType.DESIGNENTRY*


#### DESIGNPOINT_CONTAINER *= \_optiSLang_Kernel.SlotType.DESIGNPOINT_CONTAINER*


#### FLOAT *= \_optiSLang_Kernel.SlotType.FLOAT*


#### INTEGER *= \_optiSLang_Kernel.SlotType.INTEGER*


#### PARAMETER *= \_optiSLang_Kernel.SlotType.PARAMETER*


#### PARAMETER_MANAGER *= \_optiSLang_Kernel.SlotType.PARAMETER_MANAGER*


#### PARAMETER_SET *= \_optiSLang_Kernel.SlotType.PARAMETER_SET*


#### PATH *= \_optiSLang_Kernel.SlotType.PATH*


#### RUNINFO *= \_optiSLang_Kernel.SlotType.RUNINFO*


#### RUNINFO_META *= \_optiSLang_Kernel.SlotType.RUNINFO_META*


#### SAMPLING_DESIGN *= \_optiSLang_Kernel.SlotType.SAMPLING_DESIGN*


#### STRING *= \_optiSLang_Kernel.SlotType.STRING*


#### STRING_LIST *= \_optiSLang_Kernel.SlotType.STRING_LIST*


#### UNDEFINED *= \_optiSLang_Kernel.SlotType.UNDEFINED*


#### UNSIGNED_INTEGER *= \_optiSLang_Kernel.SlotType.UNSIGNED_INTEGER*


#### UNSIGNED_INTEGER_VECTOR *= \_optiSLang_Kernel.SlotType.UNSIGNED_INTEGER_VECTOR*


#### VARIANT *= \_optiSLang_Kernel.SlotType.VARIANT*


#### VARIANTSEQ *= \_optiSLang_Kernel.SlotType.VARIANTSEQ*


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### *property* active


#### add_file_provider_item(id: [FileProviderId](py_file_access.md#py_file_access.FileProviderId)) → bool

Add and use a file provider item.


#### add_input_slot(slot_type: [SlotType](#optiSLang_Kernel.Actor.SlotType), id: str)

Add an input slot with slot_type and id.


#### add_output_slot(slot_type: [SlotType](#optiSLang_Kernel.Actor.SlotType), id: str)

Add an output slot with slot_type and id.


#### *property* auto_save_mode


#### *property* auto_save_on_nth_design_collected


#### *property* connected_input_slots

Dictionary with connected input slots as keys and the slot’s sources as values. Each source is a tuple of the source actor and the source slot name.


#### *property* connected_output_slots

Dictionary with connected output slots as keys and the slot’s destinations as values. Each destination is a tuple of the destination actor and the destination slot name.


#### get_cleaning_mode() → int


#### get_file_provider_items() → object

Get a list of file provider items used in this actor.


#### get_processed_hids() → dict

Dictionary with HIDs categorized by their success states.


#### get_property(property_id: str, default_value: [ProvidedPath](py_file_access.md#py_file_access.ProvidedPath)) → [ProvidedPath](py_file_access.md#py_file_access.ProvidedPath)

#### get_property(property_id: str, default_value: [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath)) → [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath)

#### get_property(property_id: str, default_value: [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath)) → [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath)

#### get_property(property_id: str, default_value: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)

#### get_property(property_id: str, default_value: str) → str

#### get_property(property_id: str, default_value: [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)) → [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)

#### get_property(property_id: str, default_value: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)) → [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)

#### get_property(property_id: str, default_value: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)) → [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)

#### get_property(property_id: str, default_value: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)

#### get_property(property_id: str, default_value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)) → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)

#### get_property(property_id: str, default_value: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)

#### get_property(property_id: str, default_value: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)) → [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)

#### get_property(property_id: str, default_value: [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)) → [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)

#### get_property(property_id: str, default_value: [boolVec](stdcpp_python_export.md#stdcpp_python_export.boolVec)) → [boolVec](stdcpp_python_export.md#stdcpp_python_export.boolVec)

#### get_property(property_id: str, default_value: [PyOSCriterion](py_os_criterion.md#py_os_criterion.PyOSCriterion)) → [PyOSCriterion](py_os_criterion.md#py_os_criterion.PyOSCriterion)

#### get_property(property_id: str, default_value: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer)) → [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer)

[0] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[1] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[2] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[3] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[4] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[5] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[6] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[7] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[8] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[9] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[10] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[11] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[12] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[13] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[14] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.

[15] Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.


#### get_property_bool(property_id: str, default_value: bool) → bool

Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.


#### get_property_float(property_id: str, default_value: float) → float

Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.


#### get_property_int(property_id: str, default_value: int) → int

Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.


#### get_property_keys() → list

Get all accessible property keys


#### get_property_raw(property_id: str) → str

Get the raw value of a property specified by property_id.


#### get_property_uint(property_id: str, default_value: int) → int

Get the value of a property specified by property_id. If no such property or datatype doesn’t match, default_value is returned.


#### get_slot_value(slot: str name, hid: HID) → object

Get the value of a slot specified by its name and HID.


#### *property* goal


#### *property* input_slots

List of input slots. Items are dicts of name, type and standard.


#### is_finished(, consider_inactive: bool=False]) → bool

Whether an actor or a system including its children have finished their computation. If consider_inactive is set, an inactive actor will return whether it’s truly finished. Otherwise it will always pretend to be finished.


#### is_succeeded(, consider_inactive: bool=False]) → bool

Whether an actor or a system including its children have finished their computation successfully.


#### *property* max_runtime


#### *property* output_slots

List of output slots. Items are dicts of name, type and standard.


#### *property* read_mode


#### remove_file_provider_item(id: [FileProviderId](py_file_access.md#py_file_access.FileProviderId)) → bool

Remove a file provider item.


#### *property* result_recycling


#### *property* retry_count


#### *property* retry_delay


#### *property* retry_enable


#### set_cleaning_mode(mode: int)

Set clean-up mode to enable particular cleanup behavior using bitwise linked combinations of CleanupFlags


#### set_property(property_id: str, value: [ProvidedPath](py_file_access.md#py_file_access.ProvidedPath)) → bool

#### set_property(property_id: str, value: [RelativeSplittedPath](stdcpp_python_export.md#stdcpp_python_export.RelativeSplittedPath)) → bool

#### set_property(property_id: str, value: [SplittedPath](stdcpp_python_export.md#stdcpp_python_export.SplittedPath)) → bool

#### set_property(property_id: str, value: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

#### set_property(property_id: str, value: str) → bool

#### set_property(property_id: str, value: [uintVec](stdcpp_python_export.md#stdcpp_python_export.uintVec)) → bool

#### set_property(property_id: str, value: [WStrList](stdcpp_python_export.md#stdcpp_python_export.WStrList)) → bool

#### set_property(property_id: str, value: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager)) → bool

#### set_property(property_id: str, value: [PyOSDesign](py_os_design.md#py_os_design.PyOSDesign)) → bool

#### set_property(property_id: str, value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)) → bool

#### set_property(property_id: str, value: [PyOSDesignPoint](py_os_design.md#py_os_design.PyOSDesignPoint)) → bool

#### set_property(property_id: str, value: [PyOSDesignPointContainer](py_os_design.md#py_os_design.PyOSDesignPointContainer)) → bool

#### set_property(property_id: str, value: [PyOSDesignContainer](py_os_design.md#py_os_design.PyOSDesignContainer)) → bool

#### set_property(property_id: str, value: [boolVec](stdcpp_python_export.md#stdcpp_python_export.boolVec)) → bool

#### set_property(property_id: str, value: [PyOSCriterion](py_os_criterion.md#py_os_criterion.PyOSCriterion)) → bool

#### set_property(property_id: str, value: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer)) → bool

[0] Set the value of a property specified by property_id. Returns true if set successful.

[1] Set the value of a property specified by property_id. Returns true if set successful.

[2] Set the value of a property specified by property_id. Returns true if set successful.

[3] Set the value of a property specified by property_id. Returns true if set successful.

[4] Set the value of a property specified by property_id. Returns true if set successful.

[5] Set the value of a property specified by property_id. Returns true if set successful.

[6] Set the value of a property specified by property_id. Returns true if set successful.

[7] Set the value of a property specified by property_id. Returns true if set successful.

[8] Set the value of a property specified by property_id. Returns true if set successful.

[9] Set the value of a property specified by property_id. Returns true if set successful.

[10] Set the value of a property specified by property_id. Returns true if set successful.

[11] Set the value of a property specified by property_id. Returns true if set successful.

[12] Set the value of a property specified by property_id. Returns true if set successful.

[13] Set the value of a property specified by property_id. Returns true if set successful.

[14] Set the value of a property specified by property_id. Returns true if set successful.

[15] Set the value of a property specified by property_id. Returns true if set successful.


#### set_property_bool(property_id: str, value: bool) → bool

Set the value of a property specified by property_id. Returns true if set successful.


#### set_property_float(property_id: str, value: float) → bool

Set the value of a property specified by property_id. Returns true if set successful.


#### set_property_int(property_id: str, value: int) → bool

Set the value of a property specified by property_id. Returns true if set successful.


#### set_property_raw(property_tree_json: str) → bool

Set the value of a property. Argument has to be a json object, containing one or more properties. Returns true if set successful.


#### set_property_uint(property_id: str, value: int) → bool

Set the value of a property specified by property_id. Returns true if set successful.


#### *property* starting_delay


#### *property* starting_point


#### *property* stop_after_execution


#### supports_read_mode() → bool


#### supports_recycling() → bool


### *class* \_optiSLang_Kernel.AutoSaveMode

**Enumeration**


#### AS_ACTOR_FINISHED *= \_optiSLang_Kernel.AutoSaveMode.AS_ACTOR_FINISHED*


#### AS_ALGO_ITERATION_FINISHED *= \_optiSLang_Kernel.AutoSaveMode.AS_ALGO_ITERATION_FINISHED*


#### AS_PSS_NTH_DESIGN_COLLECTED *= \_optiSLang_Kernel.AutoSaveMode.AS_PSS_NTH_DESIGN_COLLECTED*


#### NO_AUTO_SAVE *= \_optiSLang_Kernel.AutoSaveMode.NO_AUTO_SAVE*


### *class* \_optiSLang_Kernel.CleanupFlags

**Enumeration**


#### CLEANUP_INTERMEDIATE_SLOT_VALUES *= \_optiSLang_Kernel.CleanupFlags.CLEANUP_INTERMEDIATE_SLOT_VALUES*


#### IDLE *= \_optiSLang_Kernel.CleanupFlags.IDLE*


### *class* \_optiSLang_Kernel.ReadMode

**Enumeration**


#### CLASSIC_REEVALUATE_MODE *= \_optiSLang_Kernel.ReadMode.CLASSIC_REEVALUATE_MODE*


#### READ_AND_WRITE_MODE *= \_optiSLang_Kernel.ReadMode.READ_AND_WRITE_MODE*


### *class* \_optiSLang_Kernel.SequencingSystem


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* \_optiSLang_Kernel.System


#### \_\_init_\_()

#### \_\_init_\_() → object

#### \_\_init_\_(arg2: str) → object


#### add_actor(actor: [Actor](#optiSLang_Kernel.Actor))

Add actor as child to this system.

```default
param_system = actors.ParametricSystemActor("System")
add_actor(param_system)
```


#### connect(from_actor: Actor, from_slot: str, to_actor: Actor, to_slot: str) → bool

#### connect(from_actor: str, from_slot: str, to_actor: Actor, to_slot: str) → bool

#### connect(from_actor: Actor, from_slot: str, to_actor: str, to_slot: str) → bool

#### connect(from_actor: str, from_slot: str, to_actor: str, to_slot: str) → bool

[0] Connect slots.


# Parameters

from_actor
: The sending actor.

from_slot
: The sending slot.

to_actor
: The receiving actor.

to_slot
: The receiving slot.

skip_rename_slot
: Whether to skip automatic slot renaming for untyped slots. False by default.


# Returns

bool
: True if connection succeeded c.

[1] Connect slots.


# Parameters

from_actor
: The sending actor.

from_slot
: The sending slot.

to_actor
: The receiving actor.

to_slot
: The receiving slot.

skip_rename_slot
: Whether to skip automatic slot renaming for untyped slots. False by default.


# Returns

bool
: True if connection succeeded c.

[2] Connect slots.


# Parameters

from_actor
: The sending actor.

from_slot
: The sending slot.

to_actor
: The receiving actor.

to_slot
: The receiving slot.

skip_rename_slot
: Whether to skip automatic slot renaming for untyped slots. False by default.


# Returns

bool
: True if connection succeeded c.

[3] Connect slots.


# Parameters

from_actor
: The sending actor.

from_slot
: The sending slot.

to_actor
: The receiving actor.

to_slot
: The receiving slot.

skip_rename_slot
: Whether to skip automatic slot renaming for untyped slots. False by default.


# Returns

bool
: True if connection succeeded c.


#### *property* connected_inner_input_slots

Dictionary with connected inner input slots as keys and the slot’s sources as values. Each source is a tuple of the source actor and the source slot name.


#### *property* connected_inner_output_slots

Dictionary with connected inner output slots as keys and the slot’s destinations as values. Each destination is a tuple of the destination actor and the destination slot name.


#### disconnect(from_actor: [Actor](#optiSLang_Kernel.Actor), from_slot: str, to_actor: [Actor](#optiSLang_Kernel.Actor), to_slot: str) → bool

#### disconnect(from_actor: str, from_slot: str, to_actor: [Actor](#optiSLang_Kernel.Actor), to_slot: str) → bool

#### disconnect(from_actor: [Actor](#optiSLang_Kernel.Actor), from_slot: str, to_actor: str, to_slot: str) → bool

#### disconnect(from_actor: str, from_slot: str, to_actor: str, to_slot: str) → bool


#### *property* dot_graph


#### find_actor(name: str) → object


#### get_children() → dict

Return all descending actors in a dictionary.


#### get_dot_graph() → str


#### get_working_directory(hid: [HID](id.md#id.HID)) → [Path](stdcpp_python_export.md#stdcpp_python_export.Path)


#### *property* inner_input_slots

List of inner input slots. Items are dicts of name, type and standard.


#### *property* inner_output_slots

List of inner output slots. Items are dicts of name, type and standard.


#### remove_actor(arg2: [Actor](#optiSLang_Kernel.Actor))


#### reset_complete()

Reset system’s status, working directory and runtime data. Attempts to shrink database.
