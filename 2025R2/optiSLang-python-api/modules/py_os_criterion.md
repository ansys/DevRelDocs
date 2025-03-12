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



### *class* py_os_criterion.DesignStatus

**Enumeration**


#### EQUAL *= py_os_criterion.DesignStatus.EQUAL*


#### GREATEREQUAL *= py_os_criterion.DesignStatus.GREATEREQUAL*


#### GREATERLIMITSTATE *= py_os_criterion.DesignStatus.GREATERLIMITSTATE*


#### IGNORE *= py_os_criterion.DesignStatus.IGNORE*


#### LESSEQUAL *= py_os_criterion.DesignStatus.LESSEQUAL*


#### LESSLIMITSTATE *= py_os_criterion.DesignStatus.LESSLIMITSTATE*


#### MAX *= py_os_criterion.DesignStatus.MAX*


#### MIN *= py_os_criterion.DesignStatus.MIN*


### *class* py_os_criterion.PyOSCriterion


#### \_\_init_\_()

#### \_\_init_\_(arg2: [DesignStatus](#py_os_criterion.DesignStatus), arg3: str)

#### \_\_init_\_(arg2: [DesignStatus](#py_os_criterion.DesignStatus), arg3: str, arg4: str)


#### get_expression() → str


#### get_float_value() → float


#### get_left_expression() → str


#### get_right_expression() → str


#### get_type() → [DesignStatus](#py_os_criterion.DesignStatus)


#### get_value() → [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry)


#### is_constraint() → bool


#### is_equal_zero() → bool


#### is_equality_constraint() → bool


#### is_equality_constraint_violated() → bool


#### is_inequality_constraint() → bool


#### is_inequality_constraint_violated() → bool


#### is_objective() → bool


#### needs_eval() → bool


#### set_constraint(type: [DesignStatus](#py_os_criterion.DesignStatus), expression_left: str, expression_right: str)


#### set_left(expression: str)


#### set_objective(type: [DesignStatus](#py_os_criterion.DesignStatus), expression: str)


#### set_right(expression: str)


#### set_type(type: [DesignStatus](#py_os_criterion.DesignStatus))


#### set_value(value: float)

#### set_value(value: [PyOSDesignEntry](py_os_design.md#py_os_design.PyOSDesignEntry))


### *class* py_os_criterion.PyOSCriterionContainer


#### \_\_getitem_\_(arg2: str) → [PyOSCriterion](#py_os_criterion.PyOSCriterion)


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: str) → [PyOSCriterion](#py_os_criterion.PyOSCriterion)


#### add(name: str, value: [PyOSCriterion](#py_os_criterion.PyOSCriterion))


#### add_expression(name: str, value: [PyOSCriterion](#py_os_criterion.PyOSCriterion))


#### remove(name: str)


#### remove_expression(name: str)
