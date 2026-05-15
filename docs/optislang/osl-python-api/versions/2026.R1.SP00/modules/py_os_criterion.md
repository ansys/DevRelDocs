# py_os_criterion

This module provides classes to handle design criteria.

A collection of criteria can be constructed in the following way:

```default
from py_os_criterion import PyOSCriterion, PyOSCriterionContainer, DesignStatus

criteria = PyOSCriterionContainer()

# add objective
criteria.add("minimize_mass", PyOSCriterion(DesignStatus.MIN, "mass_1 + mass_2 + mass_3"))
# add constraint
criteria.add("max_cost", PyOSCriterion(DesignStatus.LESSEQUAL, "min(cost_1, cost_2)", "3.0"))
# add limit state
criteria.add("measured_stress", PyOSCriterion(DesignStatus.LESSLIMITSTATE, "yield_stress", "2.3e9"))

# print criteria names
crit_names = [crit[0] for crit in criteria]
print(crit_names)
```

<a id="module-py_os_criterion"></a>

<a id="py_os_criterion.DesignStatus"></a>

## *class* py_os_criterion.DesignStatus

**Enumeration**

<a id="py_os_criterion.DesignStatus.EQUAL"></a>

#### EQUAL *= py_os_criterion.DesignStatus.EQUAL*

<a id="py_os_criterion.DesignStatus.GREATEREQUAL"></a>

#### GREATEREQUAL *= py_os_criterion.DesignStatus.GREATEREQUAL*

<a id="py_os_criterion.DesignStatus.GREATERLIMITSTATE"></a>

#### GREATERLIMITSTATE *= py_os_criterion.DesignStatus.GREATERLIMITSTATE*

<a id="py_os_criterion.DesignStatus.IGNORE"></a>

#### IGNORE *= py_os_criterion.DesignStatus.IGNORE*

<a id="py_os_criterion.DesignStatus.LESSEQUAL"></a>

#### LESSEQUAL *= py_os_criterion.DesignStatus.LESSEQUAL*

<a id="py_os_criterion.DesignStatus.LESSLIMITSTATE"></a>

#### LESSLIMITSTATE *= py_os_criterion.DesignStatus.LESSLIMITSTATE*

<a id="py_os_criterion.DesignStatus.MAX"></a>

#### MAX *= py_os_criterion.DesignStatus.MAX*

<a id="py_os_criterion.DesignStatus.MIN"></a>

#### MIN *= py_os_criterion.DesignStatus.MIN*

<a id="py_os_criterion.PyOSCriterion"></a>

## *class* py_os_criterion.PyOSCriterion

<a id="py_os_criterion.PyOSCriterion.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [DesignStatus](#py_os_criterion.DesignStatus), arg3: str)

#### \_\_init_\_(arg2: [DesignStatus](#py_os_criterion.DesignStatus), arg3: str, arg4: str)

<a id="py_os_criterion.PyOSCriterion.get_expression"></a>

#### get_expression() → str

<a id="py_os_criterion.PyOSCriterion.get_float_value"></a>

#### get_float_value() → float

<a id="py_os_criterion.PyOSCriterion.get_left_expression"></a>

#### get_left_expression() → str

<a id="py_os_criterion.PyOSCriterion.get_right_expression"></a>

#### get_right_expression() → str

<a id="py_os_criterion.PyOSCriterion.get_type"></a>

#### get_type() → [DesignStatus](#py_os_criterion.DesignStatus)

<a id="py_os_criterion.PyOSCriterion.get_value"></a>

#### get_value() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)

<a id="py_os_criterion.PyOSCriterion.is_constraint"></a>

#### is_constraint() → bool

<a id="py_os_criterion.PyOSCriterion.is_equal_zero"></a>

#### is_equal_zero() → bool

<a id="py_os_criterion.PyOSCriterion.is_equality_constraint"></a>

#### is_equality_constraint() → bool

<a id="py_os_criterion.PyOSCriterion.is_equality_constraint_violated"></a>

#### is_equality_constraint_violated() → bool

<a id="py_os_criterion.PyOSCriterion.is_inequality_constraint"></a>

#### is_inequality_constraint() → bool

<a id="py_os_criterion.PyOSCriterion.is_inequality_constraint_violated"></a>

#### is_inequality_constraint_violated() → bool

<a id="py_os_criterion.PyOSCriterion.is_objective"></a>

#### is_objective() → bool

<a id="py_os_criterion.PyOSCriterion.needs_eval"></a>

#### needs_eval() → bool

<a id="py_os_criterion.PyOSCriterion.set_constraint"></a>

#### set_constraint(type: [DesignStatus](#py_os_criterion.DesignStatus), expression_left: str, expression_right: str)

<a id="py_os_criterion.PyOSCriterion.set_left"></a>

#### set_left(expression: str)

<a id="py_os_criterion.PyOSCriterion.set_objective"></a>

#### set_objective(type: [DesignStatus](#py_os_criterion.DesignStatus), expression: str)

<a id="py_os_criterion.PyOSCriterion.set_right"></a>

#### set_right(expression: str)

<a id="py_os_criterion.PyOSCriterion.set_type"></a>

#### set_type(type: [DesignStatus](#py_os_criterion.DesignStatus))

<a id="py_os_criterion.PyOSCriterion.set_value"></a>

#### set_value(value: float)

#### set_value(value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))

<a id="py_os_criterion.PyOSCriterionContainer"></a>

## *class* py_os_criterion.PyOSCriterionContainer

<a id="py_os_criterion.PyOSCriterionContainer.__getitem__"></a>

#### \_\_getitem_\_(arg2: str) → [PyOSCriterion](#py_os_criterion.PyOSCriterion)

<a id="py_os_criterion.PyOSCriterionContainer.__init__"></a>

#### \_\_init_\_()

<a id="py_os_criterion.PyOSCriterionContainer.__iter__"></a>

#### \_\_iter_\_() → object

<a id="py_os_criterion.PyOSCriterionContainer.__len__"></a>

#### \_\_len_\_() → int

<a id="py_os_criterion.PyOSCriterionContainer.__setitem__"></a>

#### \_\_setitem_\_(arg2: str) → [PyOSCriterion](#py_os_criterion.PyOSCriterion)

<a id="py_os_criterion.PyOSCriterionContainer.add"></a>

#### add(name: str, value: [PyOSCriterion](#py_os_criterion.PyOSCriterion))

<a id="py_os_criterion.PyOSCriterionContainer.add_expression"></a>

#### add_expression(name: str, value: [PyOSCriterion](#py_os_criterion.PyOSCriterion))

<a id="py_os_criterion.PyOSCriterionContainer.remove"></a>

#### remove(name: str)

<a id="py_os_criterion.PyOSCriterionContainer.remove_expression"></a>

#### remove_expression(name: str)
