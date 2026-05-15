# py_os_design

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

<a id="module-py_os_design"></a>

<a id="py_os_design.DesignExporterCSV"></a>

## *class* py_os_design.DesignExporterCSV

<a id="py_os_design.DesignExporterCSV.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignExporterGeneric"></a>

## *class* py_os_design.DesignExporterGeneric

<a id="py_os_design.DesignExporterGeneric.__call__"></a>

#### \_\_call_\_(path: [PyOSDesign](#py_os_design.PyOSDesign), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

#### \_\_call_\_(path: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

<a id="py_os_design.DesignExporterGeneric.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_os_design.DesignExporterJson"></a>

## *class* py_os_design.DesignExporterJson

<a id="py_os_design.DesignExporterJson.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignExporterOIA"></a>

## *class* py_os_design.DesignExporterOIA

<a id="py_os_design.DesignExporterOIA.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignImporterCSV"></a>

## *class* py_os_design.DesignImporterCSV

<a id="py_os_design.DesignImporterCSV.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignImporterGeneric"></a>

## *class* py_os_design.DesignImporterGeneric

<a id="py_os_design.DesignImporterGeneric.__call__"></a>

#### \_\_call_\_(inputs: [PyOSDesign](#py_os_design.PyOSDesign), criteria: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), path: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

#### \_\_call_\_(inputs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), criteria: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), path: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), logger: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → bool

<a id="py_os_design.DesignImporterGeneric.__init__"></a>

#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python

<a id="py_os_design.DesignImporterJson"></a>

## *class* py_os_design.DesignImporterJson

<a id="py_os_design.DesignImporterJson.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignImporterOIA"></a>

## *class* py_os_design.DesignImporterOIA

<a id="py_os_design.DesignImporterOIA.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.DesignRunStatus"></a>

## *class* py_os_design.DesignRunStatus

**Enumeration**

<a id="py_os_design.DesignRunStatus.AWAITING"></a>

#### AWAITING *= py_os_design.DesignRunStatus.AWAITING*

<a id="py_os_design.DesignRunStatus.DONE"></a>

#### DONE *= py_os_design.DesignRunStatus.DONE*

<a id="py_os_design.DesignRunStatus.INPROCESS"></a>

#### INPROCESS *= py_os_design.DesignRunStatus.INPROCESS*

<a id="py_os_design.DesignStatus"></a>

## *class* py_os_design.DesignStatus

**Enumeration**

<a id="py_os_design.DesignStatus.CRITERIA_FAIL"></a>

#### CRITERIA_FAIL *= py_os_design.DesignStatus.CRITERIA_FAIL*

<a id="py_os_design.DesignStatus.NO_FAIL"></a>

#### NO_FAIL *= py_os_design.DesignStatus.NO_FAIL*

<a id="py_os_design.DesignStatus.NO_SOLVER_FAIL"></a>

#### NO_SOLVER_FAIL *= py_os_design.DesignStatus.NO_SOLVER_FAIL*

<a id="py_os_design.DesignStatus.RESPONSE_NAN"></a>

#### RESPONSE_NAN *= py_os_design.DesignStatus.RESPONSE_NAN*

<a id="py_os_design.DesignStatus.SOLVER_FAIL"></a>

#### SOLVER_FAIL *= py_os_design.DesignStatus.SOLVER_FAIL*

<a id="py_os_design.EntryType"></a>

## *class* py_os_design.EntryType

**Enumeration**

<a id="py_os_design.EntryType.BOOL"></a>

#### BOOL *= py_os_design.EntryType.BOOL*

<a id="py_os_design.EntryType.INTEGER"></a>

#### INTEGER *= py_os_design.EntryType.INTEGER*

<a id="py_os_design.EntryType.REAL"></a>

#### REAL *= py_os_design.EntryType.REAL*

<a id="py_os_design.EntryType.STRING"></a>

#### STRING *= py_os_design.EntryType.STRING*

<a id="py_os_design.EntryType.UNINITIALIZED"></a>

#### UNINITIALIZED *= py_os_design.EntryType.UNINITIALIZED*

<a id="py_os_design.EntryType.VARIANT"></a>

#### VARIANT *= py_os_design.EntryType.VARIANT*

<a id="py_os_design.PyOSDesign"></a>

## *class* py_os_design.PyOSDesign

Represents a single design in a DOE. Usually consists of parameters, responses, criteria and additional status information.

<a id="py_os_design.PyOSDesign.IsDuplicated"></a>

#### IsDuplicated() → bool

<a id="py_os_design.PyOSDesign.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.PyOSDesign.add_missing_criteria"></a>

#### add_missing_criteria(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add criteria from reference that are not defined in self.

<a id="py_os_design.PyOSDesign.add_missing_parameters"></a>

#### add_missing_parameters(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add parameters from reference that are not defined in self.

<a id="py_os_design.PyOSDesign.add_missing_responses"></a>

#### add_missing_responses(reference: [PyOSDesign](#py_os_design.PyOSDesign))

Add responses from reference that are not defined in self.

<a id="py_os_design.PyOSDesign.add_status"></a>

#### add_status(status: [RunInfoMeta](#py_os_design.RunInfoMeta))

<a id="py_os_design.PyOSDesign.dominates"></a>

#### dominates(design: [PyOSDesign](#py_os_design.PyOSDesign)) → bool

Whether the provided design dominates this design regarding fulfilment of criteria.

<a id="py_os_design.PyOSDesign.get_algorithm_iteration"></a>

#### get_algorithm_iteration() → int

<a id="py_os_design.PyOSDesign.get_criteria"></a>

#### get_criteria() → [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer)

<a id="py_os_design.PyOSDesign.get_design_leaf_number"></a>

#### get_design_leaf_number() → int

Return the leaf number of the design’s ID.

<a id="py_os_design.PyOSDesign.get_design_type"></a>

#### get_design_type() → [DesignTypes](dynardo_py_algorithms.md#dynardo_py_algorithms.DesignTypes)

<a id="py_os_design.PyOSDesign.get_id"></a>

#### get_id() → [HID](id.md#id.HID)

<a id="py_os_design.PyOSDesign.get_parameters"></a>

#### get_parameters() → [PyOSDesignPoint](#py_os_design.PyOSDesignPoint)

```python
for name, value in design.get_parameters():
    print(name, value.get())
```

<a id="py_os_design.PyOSDesign.get_responses"></a>

#### get_responses() → [PyOSDesignPoint](#py_os_design.PyOSDesignPoint)

```python
for name, value in design.get_responses():
    print(name, value.get_scalar())
```

<a id="py_os_design.PyOSDesign.get_run_status"></a>

#### get_run_status() → [DesignRunStatus](#py_os_design.DesignRunStatus)

<a id="py_os_design.PyOSDesign.get_status"></a>

#### get_status() → [RunInfoContainer](#py_os_design.RunInfoContainer)

<a id="py_os_design.PyOSDesign.get_workflow_id"></a>

#### get_workflow_id() → [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms)

<a id="py_os_design.PyOSDesign.has_error_state"></a>

#### has_error_state() → bool

<a id="py_os_design.PyOSDesign.is_active"></a>

#### is_active() → bool

<a id="py_os_design.PyOSDesign.is_awaiting"></a>

#### is_awaiting() → bool

<a id="py_os_design.PyOSDesign.is_done"></a>

#### is_done() → bool

<a id="py_os_design.PyOSDesign.is_failed"></a>

#### is_failed() → bool

<a id="py_os_design.PyOSDesign.is_feasible"></a>

#### is_feasible() → object

Return True if the design is feasible. Return False if it is not. Return None if feasibility is unknown.

<a id="py_os_design.PyOSDesign.is_incomplete"></a>

#### is_incomplete() → bool

<a id="py_os_design.PyOSDesign.is_succeeded"></a>

#### is_succeeded() → bool

<a id="py_os_design.PyOSDesign.is_violated"></a>

#### is_violated() → bool

<a id="py_os_design.PyOSDesign.needs_reevaluation"></a>

#### needs_reevaluation() → bool

<a id="py_os_design.PyOSDesign.set_awaiting"></a>

#### set_awaiting()

<a id="py_os_design.PyOSDesign.set_criteria"></a>

#### set_criteria(criteria: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer))

<a id="py_os_design.PyOSDesign.set_design_type"></a>

#### set_design_type(type: [DesignTypes](dynardo_py_algorithms.md#dynardo_py_algorithms.DesignTypes))

<a id="py_os_design.PyOSDesign.set_duplication"></a>

#### set_duplication(id: [HID](id.md#id.HID))

Specifiy a duplicate of this design.

<a id="py_os_design.PyOSDesign.set_id"></a>

#### set_id(id: [HID](id.md#id.HID))

<a id="py_os_design.PyOSDesign.set_number"></a>

#### set_number(number: int)

<a id="py_os_design.PyOSDesign.set_parameters"></a>

#### set_parameters(parameters: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))

```python
design = PyOSDesign()
params = PyOSDesignPoint()
params.add("input", 5)
design.set_parameters(params)
```

<a id="py_os_design.PyOSDesign.set_responses"></a>

#### set_responses(responses: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))

```python
design = PyOSDesign()
responses = PyOSDesignPoint()
responses.add("output", 200)
design.set_responses(responses)
```

<a id="py_os_design.PyOSDesign.set_run_status"></a>

#### set_run_status(status: [DesignRunStatus](#py_os_design.DesignRunStatus))

<a id="py_os_design.PyOSDesign.set_workflow_id"></a>

#### set_workflow_id(id: [SupportedAlgorithms](dynardo_py_algorithms.md#dynardo_py_algorithms.SupportedAlgorithms))

<a id="py_os_design.PyOSDesignContainer"></a>

## *class* py_os_design.PyOSDesignContainer

Provides access to designs within a DOE

```python
for des in design_container:
    print(des.is_succeeded())
```

<a id="py_os_design.PyOSDesignContainer.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.PyOSDesignContainer.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_design.PyOSDesignContainer.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.PyOSDesignContainer.append_designs"></a>

#### append_designs(designs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer))

<a id="py_os_design.PyOSDesignContainer.get_best_designs"></a>

#### get_best_designs() → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)

<a id="py_os_design.PyOSDesignContainer.get_design"></a>

#### get_design(id: HID) → [PyOSDesign](#py_os_design.PyOSDesign)

<a id="py_os_design.PyOSDesignContainer.has_design"></a>

#### has_design(id: HID) → bool

<a id="py_os_design.PyOSDesignContainer.push_back"></a>

#### push_back(design: [PyOSDesign](#py_os_design.PyOSDesign))

<a id="py_os_design.PyOSDesignContainer.rename_parameter"></a>

#### rename_parameter(from: str, to: str, adapt_criteria: bool)

<a id="py_os_design.PyOSDesignContainer.rename_response"></a>

#### rename_response(from: str, to: str, adapt_criteria: bool)

<a id="py_os_design.PyOSDesignContainer.set_design_awaiting"></a>

#### set_design_awaiting(id: [HID](id.md#id.HID))

<a id="py_os_design.PyOSDesignContainer.set_designs_done"></a>

#### set_designs_done(, force: bool=False])

<a id="py_os_design.PyOSDesignEntry"></a>

## *class* py_os_design.PyOSDesignEntry

Wraps a single entry as part of a design.

```python
entry = PyOSDesignEntry(3.5)
entry.get_scalar().real
```

<a id="py_os_design.PyOSDesignEntry.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: object) → object

#### \_\_init_\_(arg2: [UninitializedType](#py_os_design.UninitializedType))

#### \_\_init_\_(arg2: [VariantD](pyvariant.md#pyvariant.VariantD))

[1] Create a design entry by passing a builtin Python type. Accepted types are str, int, bool and float.

<a id="py_os_design.PyOSDesignEntry.get"></a>

#### get() → object

Extract as Python bultin type.

<a id="py_os_design.PyOSDesignEntry.get_domain_type"></a>

#### get_domain_type() → [EntryType](#py_os_design.EntryType)

Get the entry’s domain type.

<a id="py_os_design.PyOSDesignEntry.get_scalar"></a>

#### get_scalar() → complex

Try to extract as scalar.

<a id="py_os_design.PyOSDesignEntry.get_variant"></a>

#### get_variant() → [VariantD](pyvariant.md#pyvariant.VariantD)

Try to extract as variant.

<a id="py_os_design.PyOSDesignEntry.is_inf"></a>

#### is_inf() → bool

Whether the value is infinity.

<a id="py_os_design.PyOSDesignEntry.is_nan"></a>

#### is_nan() → bool

Whether the value is NaN.

<a id="py_os_design.PyOSDesignEntry.is_scalar"></a>

#### is_scalar() → bool

Whether entry is scalar.

<a id="py_os_design.PyOSDesignEntry.is_uninitialized"></a>

#### is_uninitialized() → bool

Whether the entry is not initialized with a value.

<a id="py_os_design.PyOSDesignEntry.size"></a>

#### size() → int

Get the entry’s size in case it is non-scalar.

<a id="py_os_design.PyOSDesignEntryVec"></a>

## *class* py_os_design.PyOSDesignEntryVec

Array of design entries.

<a id="py_os_design.PyOSDesignEntryVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_os_design.PyOSDesignEntryVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_os_design.PyOSDesignEntryVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_os_design.PyOSDesignEntryVec.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.PyOSDesignEntryVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_design.PyOSDesignEntryVec.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.PyOSDesignEntryVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_os_design.PyOSDesignEntryVec.append"></a>

#### append(arg2: object)

<a id="py_os_design.PyOSDesignEntryVec.extend"></a>

#### extend(arg2: object)

<a id="py_os_design.PyOSDesignEntryVec.push_back"></a>

#### push_back(arg2: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry))

<a id="py_os_design.PyOSDesignEntryVec.size"></a>

#### size() → int

<a id="py_os_design.PyOSDesignPoint"></a>

## *class* py_os_design.PyOSDesignPoint

Collection of design entries keyed by name.

```python
dp = PyOSDesignPoint()
dp.add("param_01", 3.5)
dp.add("param_02", PyOSDesignEntry(4.5))
```

<a id="py_os_design.PyOSDesignPoint.__getitem__"></a>

#### \_\_getitem_\_(arg2: str) → [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)

<a id="py_os_design.PyOSDesignPoint.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.PyOSDesignPoint.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_design.PyOSDesignPoint.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.PyOSDesignPoint.__setitem__"></a>

#### \_\_setitem_\_(arg2: str) → [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)

<a id="py_os_design.PyOSDesignPoint.add"></a>

#### add(name: str, value: object)

#### add(name: str, value: [VariantD](pyvariant.md#pyvariant.VariantD))

#### add(name: str, value: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry))

[0] Extend design point using a Python builtin type. Accepted types are str, int, bool and float.

[1] Extend design point using an optiSLang variant.

[2] Extend design point using a design entry.

<a id="py_os_design.PyOSDesignPointContainer"></a>

## *class* py_os_design.PyOSDesignPointContainer

Array of design points.

<a id="py_os_design.PyOSDesignPointContainer.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.PyOSDesignPointContainer.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_design.PyOSDesignPointContainer.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.PyOSDesignPointContainer.push_back"></a>

#### push_back(arg2: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint))

<a id="py_os_design.PyParameters"></a>

## py_os_design.PyParameters

alias of [`PyOSDesignPoint`](#py_os_design.PyOSDesignPoint)

<a id="py_os_design.PyResponses"></a>

## py_os_design.PyResponses

alias of [`PyOSDesignPoint`](#py_os_design.PyOSDesignPoint)

<a id="py_os_design.RunInfoContainer"></a>

## *class* py_os_design.RunInfoContainer

<a id="py_os_design.RunInfoContainer.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.RunInfoContainer.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_design.RunInfoContainer.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.RunInfoContainer.add_run_info"></a>

#### add_run_info(arg2: [RunInfoMeta](#py_os_design.RunInfoMeta))

<a id="py_os_design.RunInfoContainer.succeeded"></a>

#### succeeded() → bool

<a id="py_os_design.RunInfoMeta"></a>

## *class* py_os_design.RunInfoMeta

<a id="py_os_design.RunInfoMeta.__init__"></a>

#### \_\_init_\_(arg2: [DesignStatus](#py_os_design.DesignStatus))

<a id="py_os_design.TextImportAdditionalDimension"></a>

## *class* py_os_design.TextImportAdditionalDimension

Additional dimension item.

<a id="py_os_design.TextImportAdditionalDimension.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_os_design.TextImportAdditionalDimension.expression"></a>

#### *property* expression

Expression for the additional dimension.

<a id="py_os_design.TextImportAdditionalDimension.name"></a>

#### *property* name

Name of the dimension to be added.

<a id="py_os_design.TextImportAdditionalDimensionVector"></a>

## *class* py_os_design.TextImportAdditionalDimensionVector

<a id="py_os_design.TextImportAdditionalDimensionVector.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_os_design.TextImportAdditionalDimensionVector.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_os_design.TextImportAdditionalDimensionVector.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_os_design.TextImportAdditionalDimensionVector.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.TextImportAdditionalDimensionVector.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_os_design.TextImportAdditionalDimensionVector.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.TextImportAdditionalDimensionVector.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_os_design.TextImportAdditionalDimensionVector.append"></a>

#### append(arg2: object)

<a id="py_os_design.TextImportAdditionalDimensionVector.extend"></a>

#### extend(arg2: object)

<a id="py_os_design.TextImportAdditionalDimensionVector.push_back"></a>

#### push_back(arg2: [TextImportAdditionalDimension](#py_os_design.TextImportAdditionalDimension))

<a id="py_os_design.TextImportAdditionalDimensionVector.size"></a>

#### size() → int

<a id="py_os_design.TextImportDataType"></a>

## *class* py_os_design.TextImportDataType

**Enumeration**

<a id="py_os_design.TextImportDataType.AutoDetect"></a>

#### AutoDetect *= py_os_design.TextImportDataType.AutoDetect*

<a id="py_os_design.TextImportDataType.Bool"></a>

#### Bool *= py_os_design.TextImportDataType.Bool*

<a id="py_os_design.TextImportDataType.Integer"></a>

#### Integer *= py_os_design.TextImportDataType.Integer*

<a id="py_os_design.TextImportDataType.Real"></a>

#### Real *= py_os_design.TextImportDataType.Real*

<a id="py_os_design.TextImportDataType.String"></a>

#### String *= py_os_design.TextImportDataType.String*

<a id="py_os_design.TextImportDesignFilterType"></a>

## *class* py_os_design.TextImportDesignFilterType

**Enumeration**

<a id="py_os_design.TextImportDesignFilterType.DontImport"></a>

#### DontImport *= py_os_design.TextImportDesignFilterType.DontImport*

<a id="py_os_design.TextImportDesignFilterType.ImportAsActivated"></a>

#### ImportAsActivated *= py_os_design.TextImportDesignFilterType.ImportAsActivated*

<a id="py_os_design.TextImportDesignFilterType.ImportAsDeactivated"></a>

#### ImportAsDeactivated *= py_os_design.TextImportDesignFilterType.ImportAsDeactivated*

<a id="py_os_design.TextImportDimensionSettings"></a>

## *class* py_os_design.TextImportDimensionSettings

Dimension settings item.

<a id="py_os_design.TextImportDimensionSettings.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_os_design.TextImportDimensionSettings.alias"></a>

#### *property* alias

Alternative name of the dimension.

<a id="py_os_design.TextImportDimensionSettings.data_index"></a>

#### *property* data_index

Index where the dimension is located in data set (header line).

<a id="py_os_design.TextImportDimensionSettings.data_type"></a>

#### *property* data_type

Data type: either AutoDetect (wathever data fits best), String, Bool, Integer or Real.

<a id="py_os_design.TextImportDimensionSettings.dimension_type"></a>

#### *property* dimension_type

Dimension type: either Parameter, Response, DesignId or DontImport.

<a id="py_os_design.TextImportDimensionSettings.name"></a>

#### *property* name

Name of the dimension.

<a id="py_os_design.TextImportDimensionSettings.vector_size"></a>

#### *property* vector_size

Vector size, when this is a vector response.

<a id="py_os_design.TextImportDimensionSettingsVector"></a>

## *class* py_os_design.TextImportDimensionSettingsVector

<a id="py_os_design.TextImportDimensionSettingsVector.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_os_design.TextImportDimensionSettingsVector.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_os_design.TextImportDimensionSettingsVector.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_os_design.TextImportDimensionSettingsVector.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.TextImportDimensionSettingsVector.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_os_design.TextImportDimensionSettingsVector.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.TextImportDimensionSettingsVector.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_os_design.TextImportDimensionSettingsVector.append"></a>

#### append(arg2: object)

<a id="py_os_design.TextImportDimensionSettingsVector.extend"></a>

#### extend(arg2: object)

<a id="py_os_design.TextImportDimensionSettingsVector.push_back"></a>

#### push_back(arg2: [TextImportDimensionSettings](#py_os_design.TextImportDimensionSettings))

<a id="py_os_design.TextImportDimensionSettingsVector.size"></a>

#### size() → int

<a id="py_os_design.TextImportDimensionType"></a>

## *class* py_os_design.TextImportDimensionType

**Enumeration**

<a id="py_os_design.TextImportDimensionType.DesignId"></a>

#### DesignId *= py_os_design.TextImportDimensionType.DesignId*

<a id="py_os_design.TextImportDimensionType.DontImport"></a>

#### DontImport *= py_os_design.TextImportDimensionType.DontImport*

<a id="py_os_design.TextImportDimensionType.Parameter"></a>

#### Parameter *= py_os_design.TextImportDimensionType.Parameter*

<a id="py_os_design.TextImportDimensionType.Response"></a>

#### Response *= py_os_design.TextImportDimensionType.Response*

<a id="py_os_design.TextImportReplaceValues"></a>

## *class* py_os_design.TextImportReplaceValues

Replace text item.

<a id="py_os_design.TextImportReplaceValues.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_os_design.TextImportReplaceValues.complete"></a>

#### *property* complete

Value has to fit complete if True, else also wordparts will be replaced.

<a id="py_os_design.TextImportReplaceValues.dimension"></a>

#### *property* dimension

When replacement should only be done in one column, put dimension name in here, else leave empty for replacement in all dimensions.

<a id="py_os_design.TextImportReplaceValues.replacement"></a>

#### *property* replacement

Replacement text.

<a id="py_os_design.TextImportReplaceValues.text"></a>

#### *property* text

Text to be replaced.

<a id="py_os_design.TextImportReplaceValuesVector"></a>

## *class* py_os_design.TextImportReplaceValuesVector

<a id="py_os_design.TextImportReplaceValuesVector.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="py_os_design.TextImportReplaceValuesVector.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="py_os_design.TextImportReplaceValuesVector.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="py_os_design.TextImportReplaceValuesVector.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.TextImportReplaceValuesVector.__iter__"></a>

#### \_\_iter_\_() → object

#### \_\_iter_\_() → object

<a id="py_os_design.TextImportReplaceValuesVector.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_design.TextImportReplaceValuesVector.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="py_os_design.TextImportReplaceValuesVector.append"></a>

#### append(arg2: object)

<a id="py_os_design.TextImportReplaceValuesVector.extend"></a>

#### extend(arg2: object)

<a id="py_os_design.TextImportReplaceValuesVector.push_back"></a>

#### push_back(arg2: [TextImportReplaceValues](#py_os_design.TextImportReplaceValues))

<a id="py_os_design.TextImportReplaceValuesVector.size"></a>

#### size() → int

<a id="py_os_design.TextImportSettings"></a>

## *class* py_os_design.TextImportSettings

Settings object for determining settings for text import.

<a id="py_os_design.TextImportSettings.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_()

<a id="py_os_design.TextImportSettings.additional_columns"></a>

#### *property* additional_columns

Vector with additional dimensions, defined by name and expression.

<a id="py_os_design.TextImportSettings.assume_has_header"></a>

#### *property* assume_has_header

Determine the existance of a header line.

<a id="py_os_design.TextImportSettings.automatically_indentify_vector_responses"></a>

#### *property* automatically_indentify_vector_responses

Dimension names e.g. “response_name[%d]” will be grouped together as one vector response “response_name”.

<a id="py_os_design.TextImportSettings.column_exclude"></a>

#### *property* column_exclude

Columns to exclude.

<a id="py_os_design.TextImportSettings.column_include"></a>

#### *property* column_include

Columns to include.

<a id="py_os_design.TextImportSettings.column_increment"></a>

#### *property* column_increment

Import every nth column - has to be strictly positive.

<a id="py_os_design.TextImportSettings.column_maximum"></a>

#### *property* column_maximum

The last column to be read.

<a id="py_os_design.TextImportSettings.delimiters"></a>

#### *property* delimiters

Delimiters to split the lines.

<a id="py_os_design.TextImportSettings.design_layout_horizontal"></a>

#### *property* design_layout_horizontal

Set True for horizontal layout. Else False.

<a id="py_os_design.TextImportSettings.dimension_settings"></a>

#### *property* dimension_settings

Define the dimensions.

<a id="py_os_design.TextImportSettings.export_settings"></a>

#### export_settings(path_to_settings_file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Export text import settings to file.

<a id="py_os_design.TextImportSettings.header_line"></a>

#### *property* header_line

Line number of header line.

<a id="py_os_design.TextImportSettings.import_deactivated_designs"></a>

#### *property* import_deactivated_designs

Import deactivated designs, or not.

<a id="py_os_design.TextImportSettings.import_designs_with_infinity_as"></a>

#### *property* import_designs_with_infinity_as

Designs containing infinity values will be imported either as activated or deactivated, or won’t be imported.

<a id="py_os_design.TextImportSettings.import_designs_with_nan_as"></a>

#### *property* import_designs_with_nan_as

Designs containing nan values will be imported either as activated or deactivated, or won’t be imported.

<a id="py_os_design.TextImportSettings.import_duplicated_designs"></a>

#### *property* import_duplicated_designs

Import duplicated designs, or not.

<a id="py_os_design.TextImportSettings.import_incomplete_designs_as"></a>

#### *property* import_incomplete_designs_as

Incomplete designs will be imported either as activated or deactivated, or won’t be imported.

<a id="py_os_design.TextImportSettings.import_settings"></a>

#### import_settings(path_to_settings_file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path))

Import text import settings from file.

<a id="py_os_design.TextImportSettings.is_read_from_line_offset"></a>

#### *property* is_read_from_line_offset

Read the text file from line is active.

<a id="py_os_design.TextImportSettings.is_read_from_marker"></a>

#### *property* is_read_from_marker

Read the text file from marker is active.

<a id="py_os_design.TextImportSettings.lines"></a>

#### *property* lines

Lines to include.

<a id="py_os_design.TextImportSettings.read_from_beginning"></a>

#### *property* read_from_beginning

Read the text file from beginning.

<a id="py_os_design.TextImportSettings.read_from_line_offset"></a>

#### *property* read_from_line_offset

Read the text file from given line.

<a id="py_os_design.TextImportSettings.read_from_marker"></a>

#### *property* read_from_marker

Read the text file from marker.

<a id="py_os_design.TextImportSettings.replace_entries"></a>

#### *property* replace_entries

Vector with entries for replacing text entries.

<a id="py_os_design.TextImportSettings.row_increment"></a>

#### *property* row_increment

Import every nth line - has to be strictly positive.

<a id="py_os_design.TextImportSettings.start_design_id_numbering_with"></a>

#### *property* start_design_id_numbering_with

When no design id dimension is chosen, design numbering starts with this id.

<a id="py_os_design.UninitializedType"></a>

## *class* py_os_design.UninitializedType

<a id="py_os_design.UninitializedType.__init__"></a>

#### \_\_init_\_()

<a id="py_os_design.calculate_criteria"></a>

## py_os_design.calculate_criteria(design: PyOSDesign) → [PyOSDesign](#py_os_design.PyOSDesign)

Returns the given design with calculated criteria values. For the calculation an internally initialized calculator is used.

<a id="py_os_design.calculate_criteria_container"></a>

## py_os_design.calculate_criteria_container(design_container: PyOSDesignContainer) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)

Returns the given design container with calculated criteria values for all containing designs.

<a id="py_os_design.calculate_criteria_with_calc"></a>

## py_os_design.calculate_criteria_with_calc(design: PyOSDesign, calculator: object) → [PyOSDesign](#py_os_design.PyOSDesign)

Returns the given design with calculated criteria values. For the calculation the externally initialized calculator is used.

<a id="py_os_design.calculate_dependent_container"></a>

## py_os_design.calculate_dependent_container(design_container: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), parameter_manager: [PyParameterManager](py_os_parameter.md#py_os_parameter.PyParameterManager))

Calculates the dependent input parameter values for all designs of the given design container.

<a id="py_os_design.create_nvp_design_entry"></a>

## py_os_design.create_nvp_design_entry(name: str, value: [PyOSDesignEntry](#py_os_design.PyOSDesignEntry)) → object

Create entry pair with name and value.

<a id="py_os_design.designs_to_python_object"></a>

## py_os_design.designs_to_python_object(designs: PyOSDesignContainer) → object

<a id="py_os_design.export_designs_to_csv"></a>

## py_os_design.export_designs_to_csv(designs: [PyOSDesignContainer](#py_os_design.PyOSDesignContainer), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), delimiter: str)

<a id="py_os_design.export_designs_to_json"></a>

## py_os_design.export_designs_to_json(designs: PyOSDesignContainer, path: Path)

<a id="py_os_design.import_designs_from_csv"></a>

## py_os_design.import_designs_from_csv(inputs: [PyOSDesignPoint](#py_os_design.PyOSDesignPoint), criteria: [PyOSCriterionContainer](py_os_criterion.md#py_os_criterion.PyOSCriterionContainer), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), delimiter: str) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)

<a id="py_os_design.import_designs_from_json"></a>

## py_os_design.import_designs_from_json(path: [Path](stdcpp_python_export.md#stdcpp_python_export.Path)) → [PyOSDesignContainer](#py_os_design.PyOSDesignContainer)

<a id="py_os_design.read_design_from_file"></a>

## py_os_design.read_design_from_file(file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), parsed_filename: str) → [PyOSDesign](#py_os_design.PyOSDesign)

<a id="py_os_design.write_design_to_file"></a>

## py_os_design.write_design_to_file(design: [PyOSDesign](#py_os_design.PyOSDesign), file: [Path](stdcpp_python_export.md#stdcpp_python_export.Path), inputs_only: bool, source_file: str)
