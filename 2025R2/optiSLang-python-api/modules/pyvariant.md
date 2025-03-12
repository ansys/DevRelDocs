

### *class* pyvariant.InterpolationType

**Enumeration**


#### Linear *= pyvariant.InterpolationType.Linear*


#### Quadratic *= pyvariant.InterpolationType.Quadratic*


#### Spline *= pyvariant.InterpolationType.Spline*


### *class* pyvariant.VariantD


#### \_\_add_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_complex_\_() → object


#### \_\_eq_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_ge_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_getinitargs_\_() → tuple


#### \_\_getstate_\_() → tuple


#### \_\_getstate_manages_dict_\_ *= True*


#### \_\_gt_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_init_\_()

#### \_\_init_\_(arg2: float, arg3: float)

#### \_\_init_\_(scalar_value: object) → object

#### \_\_init_\_(row: list) → object

#### \_\_init_\_(channels: list, abscissa: list) → object

#### \_\_init_\_(channels: list, abscissa: list, transpose: bool) → object

[2] Create a scalar variant using Python’s builtin types. Accepts bool, integer, float and complex.

[3] Create a vector or matrix by passing a list. Use a nested list to create a matrix.

[4] Create a signal or xydata by passing channels and abscissa as nested lists resp. list.

[5] Create a signal or xydata by passing channels and abscissa as nested lists resp. list. The matrix containing the channels can be transposed on demand.


#### \_\_le_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_lt_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_mul_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_repr_\_() → object


#### \_\_safe_for_unpickling_\_ *= True*


#### \_\_setstate_\_(arg2: tuple)


#### \_\_str_\_() → object


#### \_\_sub_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### \_\_truediv_\_(arg2: [VariantD](#pyvariant.VariantD)) → object


#### get_value(row: int) → complex

#### get_value(row: int, col: int) → complex

[0] Return the complex value from index (row).

```default
from pyvariant import list_2_variant_vector
variant = list_2_variant_vector([1.0, 2.0, 3.0])
row = 1
print('Value from index ({}) is {}.'.format(row, variant.get_value(row).real))
# Value from index (1) is 2.0.
```

[1] Return the complex value from index (row, col).

```default
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
row, col = 0, 1
print('Value from index ({}, {}) is {}.'.format(row, col, variant.get_value(row, col).real))
# Value from index (0, 1) is 0.2.
```


#### size1() → int

Return the length of dimension 1.
If VariantD is a scalar, size1 is equal to ‘1’.
If VariantD is a vector, size1 returns the number of vector entries.
If VariantD is a matrix, size1 returns the number of matrix rows.
If VariantD is xy-data or a signal, size1 returns the number of y-axes.

```default
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size1 of variant is {}.'.format(variant.size1()))
# size1 of variant is 1.
```


#### size2() → int

Return the length of dimension 2.
If VariantD is a scalar or vector, size2 is equal to ‘1’.
If VariantD is a matrix, size2 returns the number of matrix columns.
If VariantD is xydata or a signal, size2 returns the number of y-axis entries.

```default
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size2 of variant is {}.'.format(variant.size2()))
# size2 of variant is 3.
```


### pyvariant.extract_abscissae(item: [VariantD](#pyvariant.VariantD)) → [VariantD](#pyvariant.VariantD)

Extract the abscissae from ‘item’ and returns a VariantD vector.
If ‘item’ is a matrix, the first matrix row will be extracted.
If ‘item’ is xydata or a signal, the x-axis will be extracted.

```default
from pyvariant import list_2_variant_xy_data, extract_abscissae
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print(extract_abscissae(variant))
# VECTOR [3]
# (0,0)
# (1,0)
# (2,0)
```


### pyvariant.extract_channel(item: [VariantD](#pyvariant.VariantD), axis_nr: int) → [VariantD](#pyvariant.VariantD)

Extract a channel ‘axis_nr’ from ‘item’ and returns a VariantD vector.
If ‘item’ is a matrix, extract_channel returns the row number ‘axis_nr’.
If item is xydata or a signal, extract_channel returns the channel number ‘axis_nr’.

```default
from pyvariant import list_2_variant_xy_data, extract_channel
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print(extract_channel(variant, 1))
# VECTOR [3]
# (0.1,0)
# (0.2,0)
# (0.3,0)
```


### pyvariant.get_boolean(item: [VariantD](#pyvariant.VariantD)) → bool

Return the value if ‘item’ is a boolean.

```default
from pyvariant import VariantD, get_boolean
variant = VariantD(True)
print(get_boolean(variant))
# True
```


### pyvariant.get_scalar(item: [VariantD](#pyvariant.VariantD)) → complex

Return the complex value if ‘item’ is a scalar.

```default
from pyvariant import VariantD, get_scalar
variant = VariantD(1.0)
print(get_scalar(variant))
# (1.0+0j)
```


### pyvariant.interpolate(signal: VariantD) → [VariantD](#pyvariant.VariantD)

Perform interpolation on input signal. Optionally pass a value for x-increment and interpolation type.


### pyvariant.is_boolean(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a bool value and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_boolean
variant_a = VariantD(1.0)
variant_b = VariantD(True)
print(is_boolean(variant_a), is_boolean(variant_b))
# False True
```


### pyvariant.is_matrix(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a matrix and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_matrix, list_list_2_variant_matrix
variant_a = VariantD(1.0)
variant_b = list_list_2_variant_matrix([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])
print(is_matrix(variant_a), is_matrix(variant_b))
# False True
```


### pyvariant.is_scalar(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a scalar value and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_scalar
variant_a = VariantD(1.0)
variant_b = VariantD(True)
print(is_scalar(variant_a), is_scalar(variant_b))
# True False
```


### pyvariant.is_signal(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a signal and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_signal, list_list_2_variant_signal
variant_a = VariantD(1.0)
x_axis = [1.0, 2.0, 3.0]
y_axes = [[0.1, 0.2, 0.3], [1.3, 1.2, 1.1]]
variant_b = list_list_2_variant_signal(y_axes, x_axis)
print(is_signal(variant_a), is_signal(variant_b))
# False True
```


### pyvariant.is_uninitialized(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a uninitialized and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_uninitialized
variant_a = VariantD(1.0)
variant_b = VariantD()
print(is_uninitialized(variant_a), is_uninitialized(variant_b))
# False True
```


### pyvariant.is_vector(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a vector and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_vector, list_2_variant_vector
variant_a = VariantD(1.0)
variant_b = list_2_variant_vector([1.0, 2.0, 3.0])
print(is_vector(variant_a), is_vector(variant_b))
# False True
```


### pyvariant.is_xy_data(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a xy-data and ‘False’ otherwise.

```default
from pyvariant import VariantD, is_xy_data, list_2_variant_xy_data
variant_a = VariantD(1.0)
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant_b = list_2_variant_xy_data(y_axis, x_axis)
print(is_xy_data(variant_a), is_xy_data(variant_b))
# False True
```


### pyvariant.list_2_variant_vector(values: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of values into VariantD vector type.

```default
from pyvariant import list_2_variant_vector
values = [1.0, 2.0, 3.0]
print(list_2_variant_vector(values))
# VECTOR [3]
# (1.0,0)
# (2.0,0)
# (3.0,0)
```


### pyvariant.list_2_variant_xy_data(y_axis: list, x_axis: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of x-values and a list of y-values into VariantD xy-data type.

```default
from pyvariant import list_2_variant_xy_data
x_axis = [1.0, 2.0, 3.0]
y_axis = [0.1, 0.2, 0.3]
print(list_2_variant_xy_data(y_axis, x_axis))
# XYDATA [3, 1]
# (1,0) - (0.1,0)
# (2,0) - (0.2,0)
# (3,0) - (0.3,0)
```


### pyvariant.list_list_2_variant_matrix(values: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of lists of values into VariantD matrix type.

```default
from pyvariant import list_list_2_variant_matrix
values = [[1, 2], [3, 4], [5, 6]]
print(list_list_2_variant_matrix(values))
# MATRIX [3, 2]
# (1,0) (2,0)
# (3,0) (4,0)
# (5,0) (6,0)
```


### pyvariant.list_list_2_variant_signal(y_axes: list, x_axis: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of x-values and a list of lists of y-values into VariantD signal type.

```default
from pyvariant import list_list_2_variant_signal
x_axis = [1.0, 2.0, 3.0]
y_axes = [[0.1, 0.2, 0.3], [1.3, 1.2, 1.1]]
print(list_list_2_variant_signal(y_axes, x_axis))
# SIGNAL [3, 2]
# (1,0) - (0.1,0) (1.3,0)
# (2,0) - (0.2,0) (1.2,0)
# (3,0) - (0.3,0) (1.1,0)
```


### pyvariant.size1(item: [VariantD](#pyvariant.VariantD)) → int

Return the length of dimension 1.
If ‘item’ is a scalar, size1 is equal to ‘1’.
If ‘item’ is a vector, size1 returns the number of vector entries.
If ‘item’ is a matrix, size1 returns the number of matrix rows.
If ‘item’ is xy-data or a signal, size1 returns the number of y-axes.

```default
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size1 of variant is {}.'.format(variant.size1()))
# size1 of variant is 1.
```


### pyvariant.size2(item: [VariantD](#pyvariant.VariantD)) → int

Return the length of dimension 2.
If ‘item’ is a scalar or vector, size2 is equal to ‘1’.
If ‘item’ is a matrix, size2 returns the number of matrix columns.
If ‘item’ is xydata or a signal, size2 returns the number of y-axis entries.

```default
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size2 of variant is {}.'.format(variant.size2()))
# size2 of variant is 3.
```
