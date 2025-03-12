Functionality to handle individual designs and DOEs. These can either emerge from Actor calculation results or be manually constructed.:

```default
import os
import numpy as np
import py_os_design as pod
from py_os_parameter import PyParameterManager
from py_omdb import PyOMDB


def f(x):
    s = np.sum(x)
    if s >= 0:
        return np.sqrt(s)
    else:
        return np.nan

# constants
dim = 4  # problem dimension
N = 12  # number of designs
start_design = 23   # design numbers to start with this number
param_names = ['x' + str(i) for i in range(dim)]
lower_bounds = np.array(dim * [-2.0], dtype=float)
upper_bounds = np.array(dim * [5.0], dtype=float)

# creating new design points
design_container = pod.PyOSDesignContainer()  # creating an empty new design container

for j in range(N):

    # creating an empty new design
    design = pod.PyOSDesign()  # creating a new design
    params = pod.PyOSDesignPoint()  # object for storing parameters for the new design
    resps = pod.PyOSDesignPoint()  # object for storing responses for the new design
    design_number = startdesign + j
    design.set_number(design_number) # new chosen design number
    design.set_run_status(pod.AWAITING)

    # setting input parameters
    x = lower_bounds + np.random.rand(dim) * (upper_bounds - lower_bounds)
    for i in range(dim):
        params.add(param_names[i], x[i])

    design.set_parameters(params)

    # setting response values
    y = f(x)
    resps.add('y', f(x))
    design.set_responses(resps)

    msg = 'iter {}: new design has parameters = {}'.format(j, x)
    msg += '    and responses = {}'.format(y)
    print(msg)

    # setting additional flags and infos
    if np.isnan(y):
        design.add_status(pod.RunInfoMeta(pod.SOLVER_FAIL))
    else:
        design.add_status(pod.RunInfoMeta(pod.NO_FAIL))

    design.set_run_status(pod.DONE)

    # add the design to the design container
    design_container.push_back(design)

# creating the parameter manager
pm = PyParameterManager()
for i, pname in enumerate(param_names):
    pm.add_deterministic_continuous_parameter(pname,
                                              lower_bounds[i],
                                              upper_bounds[i],
                                              0.5 * (lower_bounds[i] + upper_bounds[i]),
                                              0)

# store the design and parameter manager information in an .omdb file
db_file = PyOMDB()
db_file.design_container = design_container
db_file.parameter_manager = pm
db_file.check_consistency()
db_file.save_to_file(os.path.join(OSL_PROJECT_DIR, 'my_design_data.omdb')
```



### *class* py_os_design.DesignExporterCSV


#### \_\_init_\_()


### *class* py_os_design.DesignExporterGeneric


#### \_\_call_\_(path: [PyOSDesign](#py_os_design.PyOSDesign), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

#### \_\_call_\_(path: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_os_design.DesignExporterJson


#### \_\_init_\_()


### *class* py_os_design.DesignExporterOIA


#### \_\_init_\_()


### *class* py_os_design.DesignImporterCSV


#### \_\_init_\_()


### *class* py_os_design.DesignImporterGeneric


#### \_\_call_\_(inputs: [PyOSDesign](#py_os_design.PyOSDesign), criteria: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), path: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

#### \_\_call_\_(inputs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), criteria: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), path: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


### *class* py_os_design.DesignImporterJson


#### \_\_init_\_()


### *class* py_os_design.DesignImporterOIA


#### \_\_init_\_()


### *class* py_os_design.DesignRunStatus

**Enumeration**


#### AWAITING *= py_os_design.DesignRunStatus.AWAITING*


#### DONE *= py_os_design.DesignRunStatus.DONE*


#### INPROCESS *= py_os_design.DesignRunStatus.INPROCESS*


### *class* py_os_design.DesignStatus

**Enumeration**


#### CRITERIA_FAIL *= py_os_design.DesignStatus.CRITERIA_FAIL*


#### NO_FAIL *= py_os_design.DesignStatus.NO_FAIL*


#### NO_SOLVER_FAIL *= py_os_design.DesignStatus.NO_SOLVER_FAIL*


#### RESPONSE_NAN *= py_os_design.DesignStatus.RESPONSE_NAN*


#### SOLVER_FAIL *= py_os_design.DesignStatus.SOLVER_FAIL*


### *class* py_os_design.EntryType

**Enumeration**


#### BOOL *= py_os_design.EntryType.BOOL*


#### INTEGER *= py_os_design.EntryType.INTEGER*


#### REAL *= py_os_design.EntryType.REAL*


#### STRING *= py_os_design.EntryType.STRING*


#### UNINITIALIZED *= py_os_design.EntryType.UNINITIALIZED*


#### VARIANT *= py_os_design.EntryType.VARIANT*


### *class* py_os_design.PyOSDesign

Represents a single design in a DOE. Usually consists of parameters, responses, criteria and additional status information.


#### IsDuplicated() → bool


#### \_\_init_\_()


#### add_missing_criteria(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add criteria from reference that are not defined in self.


#### add_missing_parameters(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add parameters from reference that are not defined in self.


#### add_missing_responses(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add responses from reference that are not defined in self.


#### add_status(status: [RunInfoMeta](#py_os_design.RunInfoMeta))


#### dominates(design: [PyOSDesign](#py_os_design.PyOSDesign)) → bool

Whether the provided design dominates this design regarding fulfilment of criteria.


#### get_algorithm_iteration() → int


#### get_criteria() → [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer)


#### get_design_leaf_number() → int

Return the leaf number of the design’s ID.


#### get_design_type() → [DesignTypes](dynardo_py_algorithms.md#dynardo_py_algorithms.DesignTypes)


#### get_id() → [HID](id.md#id.HID)


#### get_parameters() → [PyOSDesignPoint](#py_os_design.PyOSDesignPoint)

```default
for name, value in design.get_parameters():
    print(name, value.get())
```


#### get_responses() → [PyOSDesignPoint](#py_os_design.PyOSDesignPoint)

```default
for name, value in design.get_responses():
    print(name, value.get_scalar())
```


#### get_run_status() → [DesignRunStatus](#py_os_design.DesignRunStatus)


#### get_status() → [RunInfoContainer](#py_os_design.RunInfoContainer)


#### get_workflow_id() → [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms)


#### has_error_state() → bool


#### is_active() → bool


#### is_awaiting() → bool


#### is_done() → bool


#### is_failed() → bool


#### is_feasible() → object

Return True if the design is feasible. Return False if it is not. Return None if feasibility is unknown.


#### is_incomplete() → bool


#### is_succeeded() → bool


#### is_violated() → bool


#### needs_reevaluation() → bool


#### set_awaiting()


#### set_criteria(criteria: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer))


#### set_design_type(type: [DesignTypes](dynardo_py_algorithms.md#dynardo_py_algorithms.DesignTypes))


#### set_duplication(id: [HID](id.md#id.HID))

Specifiy a duplicate of this design.


#### set_id(id: [HID](id.md#id.HID))


#### set_number(number: int)


#### set_parameters(parameters: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))

```default
design = PyOSDesign()
params = PyOSDesignPoint()
params.add("input", 5)
design.set_parameters(params)
```


#### set_responses(responses: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))

```default
design = PyOSDesign()
responses = PyOSDesignPoint()
responses.add("output", 200)
design.set_responses(responses)
```


#### set_run_status(status: [DesignRunStatus](#py_os_design.DesignRunStatus))


#### set_workflow_id(id: [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms))


### *class* py_os_design.PyOSDesignContainer

Provides access to designs within a DOE

```default
for des in design_container:
    print(des.is_succeeded())
```


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### append_designs(designs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer))


#### get_best_designs() → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)


#### get_design(id: HID) → [PyOSDesign](#py_os_design.PyOSDesign)


#### has_design(id: HID) → bool


#### push_back(design: [PyOSDesign](#py_os_design.PyOSDesign))


#### rename_parameter(from: str, to: str, adapt_criteria: bool)


#### rename_response(from: str, to: str, adapt_criteria: bool)


#### set_design_awaiting(id: [HID](id.md#id.HID))


#### set_designs_done(, force: bool=False])


### *class* py_os_design.PyOSDesignEntry

Wraps a single entry as part of a design.

```default
entry = PyOSDesignEntry(3.5)
entry.get_scalar().real
```


#### \_\_init_\_()

#### \_\_init_\_(arg2: object) → object

#### \_\_init_\_(arg2: [UninitializedType](#py_os_design.UninitializedType))

#### \_\_init_\_(arg2: [VariantD](pyvariant.md#pyvariant.VariantD))

[1] Create a design entry by passing a builtin Python type. Accepted types are str, int, bool and float.


#### get() → object

Extract as Python bultin type.


#### get_domain_type() → [EntryType](#py_os_design.EntryType)

Get the entry’s domain type.


#### get_scalar() → complex

Try to extract as scalar.


#### get_variant() → [VariantD](pyvariant.md#pyvariant.VariantD)

Try to extract as variant.


#### is_inf() → bool

Whether the value is infinity.


#### is_nan() → bool

Whether the value is NaN.


#### is_scalar() → bool

Whether entry is scalar.


#### is_uninitialized() → bool

Whether the entry is not initialized with a value.


#### size() → int

Get the entry’s size in case it is non-scalar.


### *class* py_os_design.PyOSDesignEntryVec

Array of design entries.


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry))


#### size() → int


### *class* py_os_design.PyOSDesignPoint

Collection of design entries keyed by name.

```default
dp = PyOSDesignPoint()
dp.add("param_01", 3.5)
dp.add("param_02", PyOSDesignEntry(4.5))
```


#### \_\_getitem_\_(arg2: str) → [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: str) → [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)


#### add(name: str, value: object)

#### add(name: str, value: [VariantD](pyvariant.md#pyvariant.VariantD))

#### add(name: str, value: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry))

[0] Extend design point using a Python builtin type. Accepted types are str, int, bool and float.

[1] Extend design point using an optiSLang variant.

[2] Extend design point using a design entry.


### *class* py_os_design.PyOSDesignPointContainer

Array of design points.


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### push_back(arg2: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))


### py_os_design.PyParameters

alias of [`PyOSDesignPoint`](#py_os_design.PyOSDesignPoint)


### py_os_design.PyResponses

alias of [`PyOSDesignPoint`](#py_os_design.PyOSDesignPoint)


### *class* py_os_design.RunInfoContainer


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### add_run_info(arg2: [RunInfoMeta](#py_os_design.RunInfoMeta))


#### succeeded() → bool


### *class* py_os_design.RunInfoMeta


#### \_\_init_\_(arg2: [DesignStatus](#py_os_design.DesignStatus))


### *class* py_os_design.TextImportAdditionalDimension

Additional dimension item.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* expression

Expression for the additional dimension.


#### *property* name

Name of the dimension to be added.


### *class* py_os_design.TextImportAdditionalDimensionVector


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [TextImportAdditionalDimension](#py_os_design.TextImportAdditionalDimension))


#### size() → int


### *class* py_os_design.TextImportDataType

**Enumeration**


#### AutoDetect *= py_os_design.TextImportDataType.AutoDetect*


#### Bool *= py_os_design.TextImportDataType.Bool*


#### Integer *= py_os_design.TextImportDataType.Integer*


#### Real *= py_os_design.TextImportDataType.Real*


#### String *= py_os_design.TextImportDataType.String*


### *class* py_os_design.TextImportDesignFilterType

**Enumeration**


#### DontImport *= py_os_design.TextImportDesignFilterType.DontImport*


#### ImportAsActivated *= py_os_design.TextImportDesignFilterType.ImportAsActivated*


#### ImportAsDeactivated *= py_os_design.TextImportDesignFilterType.ImportAsDeactivated*


### *class* py_os_design.TextImportDimensionSettings

Dimension settings item.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* alias

Alternative name of the dimension.


#### *property* data_index

Index where the dimension is located in data set (header line).


#### *property* data_type

Data type: either AutoDetect (wathever data fits best), String, Bool, Integer or Real.


#### *property* dimension_type

Dimension type: either Parameter, Response, DesignId or DontImport.


#### *property* name

Name of the dimension.


#### *property* vector_size

Vector size, when this is a vector response.


### *class* py_os_design.TextImportDimensionSettingsVector


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [TextImportDimensionSettings](#py_os_design.TextImportDimensionSettings))


#### size() → int


### *class* py_os_design.TextImportDimensionType

**Enumeration**


#### DesignId *= py_os_design.TextImportDimensionType.DesignId*


#### DontImport *= py_os_design.TextImportDimensionType.DontImport*


#### Parameter *= py_os_design.TextImportDimensionType.Parameter*


#### Response *= py_os_design.TextImportDimensionType.Response*


### *class* py_os_design.TextImportReplaceValues

Replace text item.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* complete

Value has to fit complete if True, else also wordparts will be replaced.


#### *property* dimension

When replacement should only be done in one column, put dimension name in here, else leave empty for replacement in all dimensions.


#### *property* replacement

Replacement text.


#### *property* text

Text to be replaced.


### *class* py_os_design.TextImportReplaceValuesVector


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [TextImportReplaceValues](#py_os_design.TextImportReplaceValues))


#### size() → int


### *class* py_os_design.TextImportSettings

Settings object for determining settings for text import.


#### \_\_init_\_()

#### \_\_init_\_()


#### *property* additional_columns

Vector with additional dimensions, defined by name and expression.


#### *property* assume_has_header

Determine the existance of a header line.


#### *property* automatically_indentify_vector_responses

Dimension names e.g. “response_name[%d]” will be grouped together as one vector response “response_name”.


#### *property* column_exclude

Columns to exclude.


#### *property* column_include

Columns to include.


#### *property* column_increment

Import every nth column - has to be strictly positive.


#### *property* column_maximum

The last column to be read.


#### *property* delimiters

Delimiters to split the lines.


#### *property* design_layout_horizontal

Set True for horizontal layout. Else False.


#### *property* dimension_settings

Define the dimensions.


#### export_settings(path_to_settings_file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Export text import settings to file.


#### *property* header_line

Line number of header line.


#### *property* import_deactivated_designs

Import deactivated designs, or not.


#### *property* import_designs_with_infinity_as

Designs containing infinity values will be imported either as activated or deactivated, or won’t be imported.


#### *property* import_designs_with_nan_as

Designs containing nan values will be imported either as activated or deactivated, or won’t be imported.


#### *property* import_duplicated_designs

Import duplicated designs, or not.


#### *property* import_incomplete_designs_as

Incomplete designs will be imported either as activated or deactivated, or won’t be imported.


#### import_settings(path_to_settings_file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Import text import settings from file.


#### *property* is_read_from_line_offset

Read the text file from line is active.


#### *property* is_read_from_marker

Read the text file from marker is active.


#### *property* lines

Lines to include.


#### *property* read_from_beginning

Read the text file from beginning.


#### *property* read_from_line_offset

Read the text file from given line.


#### *property* read_from_marker

Read the text file from marker.


#### *property* replace_entries

Vector with entries for replacing text entries.


#### *property* row_increment

Import every nth line - has to be strictly positive.


#### *property* start_design_id_numbering_with

When no design id dimension is chosen, design numbering starts with this id.


### *class* py_os_design.UninitializedType


#### \_\_init_\_()


### py_os_design.calculate_criteria(design: PyOSDesign) → [PyOSDesign](#py_os_design.PyOSDesign)

Returns the given design with calculated criteria values. For the calculation an internally initialized calculator is used.


### py_os_design.calculate_criteria_container(design_container: PyOSDesignContainer) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)

Returns the given design container with calculated criteria values for all containing designs.


### py_os_design.calculate_criteria_with_calc(design: PyOSDesign, calculator: object) → [PyOSDesign](#py_os_design.PyOSDesign)

Returns the given design with calculated criteria values. For the calculation the externally initialized calculator is used.


### py_os_design.calculate_dependent_container(design_container: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), parameter_manager: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager))

Calculates the dependent input parameter values for all designs of the given design container.


### py_os_design.create_nvp_design_entry(name: str, value: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)) → object

Create entry pair with name and value.


### py_os_design.designs_to_python_object(designs: PyOSDesignContainer) → object


### py_os_design.export_designs_to_csv(designs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), delimiter: str)


### py_os_design.export_designs_to_json(designs: PyOSDesignContainer, path: Path)


### py_os_design.import_designs_from_csv(inputs: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), criteria: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), delimiter: str) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)


### py_os_design.import_designs_from_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)


### py_os_design.read_design_from_file(file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), parsed_filename: str) → [PyOSDesign](#py_os_design.PyOSDesign)


### py_os_design.write_design_to_file(design: [PyOSDesign](#py_os_design.PyOSDesign), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), inputs_only: bool, source_file: str)
