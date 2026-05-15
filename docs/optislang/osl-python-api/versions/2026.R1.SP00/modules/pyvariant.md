# pyvariant

<a id="pyvariant.InterpolationType"></a>

## *class* pyvariant.InterpolationType

**Enumeration**

<a id="pyvariant.InterpolationType.Linear"></a>

#### Linear *= pyvariant.InterpolationType.Linear*

<a id="pyvariant.InterpolationType.Quadratic"></a>

#### Quadratic *= pyvariant.InterpolationType.Quadratic*

<a id="pyvariant.InterpolationType.Spline"></a>

#### Spline *= pyvariant.InterpolationType.Spline*

<a id="pyvariant.VariantD"></a>

## *class* pyvariant.VariantD

<a id="pyvariant.VariantD.__add__"></a>

#### \_\_add_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__complex__"></a>

#### \_\_complex_\_() → object

<a id="pyvariant.VariantD.__eq__"></a>

#### \_\_eq_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__ge__"></a>

#### \_\_ge_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__getinitargs__"></a>

#### \_\_getinitargs_\_() → tuple

<a id="pyvariant.VariantD.__getstate__"></a>

#### \_\_getstate_\_() → tuple

<a id="pyvariant.VariantD.__getstate_manages_dict__"></a>

#### \_\_getstate_manages_dict_\_ *= True*

<a id="pyvariant.VariantD.__gt__"></a>

#### \_\_gt_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__init__"></a>

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

<a id="pyvariant.VariantD.__le__"></a>

#### \_\_le_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__lt__"></a>

#### \_\_lt_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__mul__"></a>

#### \_\_mul_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__repr__"></a>

#### \_\_repr_\_() → object

<a id="pyvariant.VariantD.__safe_for_unpickling__"></a>

#### \_\_safe_for_unpickling_\_ *= True*

<a id="pyvariant.VariantD.__setstate__"></a>

#### \_\_setstate_\_(arg2: tuple)

<a id="pyvariant.VariantD.__str__"></a>

#### \_\_str_\_() → object

<a id="pyvariant.VariantD.__sub__"></a>

#### \_\_sub_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.__truediv__"></a>

#### \_\_truediv_\_(arg2: [VariantD](#pyvariant.VariantD)) → object

<a id="pyvariant.VariantD.get_value"></a>

#### get_value(row: int) → complex

#### get_value(row: int, col: int) → complex

[0] Return the complex value from index (row).

```python
from pyvariant import list_2_variant_vector
variant = list_2_variant_vector([1.0, 2.0, 3.0])
row = 1
print('Value from index ({}) is {}.'.format(row, variant.get_value(row).real))
# Value from index (1) is 2.0.
```

[1] Return the complex value from index (row, col).

```python
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
row, col = 0, 1
print('Value from index ({}, {}) is {}.'.format(row, col, variant.get_value(row, col).real))
# Value from index (0, 1) is 0.2.
```

<a id="pyvariant.VariantD.size1"></a>

#### size1() → int

Return the length of dimension 1.
If VariantD is a scalar, size1 is equal to ‘1’.
If VariantD is a vector, size1 returns the number of vector entries.
If VariantD is a matrix, size1 returns the number of matrix rows.
If VariantD is xy-data or a signal, size1 returns the number of y-axes.

```python
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size1 of variant is {}.'.format(variant.size1()))
# size1 of variant is 1.
```

<a id="pyvariant.VariantD.size2"></a>

#### size2() → int

Return the length of dimension 2.
If VariantD is a scalar or vector, size2 is equal to ‘1’.
If VariantD is a matrix, size2 returns the number of matrix columns.
If VariantD is xydata or a signal, size2 returns the number of y-axis entries.

```python
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size2 of variant is {}.'.format(variant.size2()))
# size2 of variant is 3.
```

<a id="pyvariant.extract_abscissae"></a>

## pyvariant.extract_abscissae(item: [VariantD](#pyvariant.VariantD)) → [VariantD](#pyvariant.VariantD)

Extract the abscissae from ‘item’ and returns a VariantD vector.
If ‘item’ is a matrix, the first matrix row will be extracted.
If ‘item’ is xydata or a signal, the x-axis will be extracted.

```python
from pyvariant import list_2_variant_xy_data, extract_abscissae
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print(extract_abscissae(variant))
# VECTOR [3]
# (0,0)
# (1,0)
# (2,0)
```

<a id="pyvariant.extract_channel"></a>

## pyvariant.extract_channel(item: [VariantD](#pyvariant.VariantD), axis_nr: int) → [VariantD](#pyvariant.VariantD)

Extract a channel ‘axis_nr’ from ‘item’ and returns a VariantD vector.
If ‘item’ is a matrix, extract_channel returns the row number ‘axis_nr’.
If item is xydata or a signal, extract_channel returns the channel number ‘axis_nr’.

```python
from pyvariant import list_2_variant_xy_data, extract_channel
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print(extract_channel(variant, 1))
# VECTOR [3]
# (0.1,0)
# (0.2,0)
# (0.3,0)
```

<a id="pyvariant.get_boolean"></a>

## pyvariant.get_boolean(item: [VariantD](#pyvariant.VariantD)) → bool

Return the value if ‘item’ is a boolean.

```python
from pyvariant import VariantD, get_boolean
variant = VariantD(True)
print(get_boolean(variant))
# True
```

<a id="pyvariant.get_scalar"></a>

## pyvariant.get_scalar(item: [VariantD](#pyvariant.VariantD)) → complex

Return the complex value if ‘item’ is a scalar.

```python
from pyvariant import VariantD, get_scalar
variant = VariantD(1.0)
print(get_scalar(variant))
# (1.0+0j)
```

<a id="pyvariant.interpolate"></a>

## pyvariant.interpolate(signal: VariantD) → [VariantD](#pyvariant.VariantD)

Perform interpolation on input signal. Optionally pass a value for x-increment and interpolation type.

<a id="pyvariant.is_boolean"></a>

## pyvariant.is_boolean(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a bool value and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_boolean
variant_a = VariantD(1.0)
variant_b = VariantD(True)
print(is_boolean(variant_a), is_boolean(variant_b))
# False True
```

<a id="pyvariant.is_matrix"></a>

## pyvariant.is_matrix(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a matrix and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_matrix, list_list_2_variant_matrix
variant_a = VariantD(1.0)
variant_b = list_list_2_variant_matrix([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])
print(is_matrix(variant_a), is_matrix(variant_b))
# False True
```

<a id="pyvariant.is_scalar"></a>

## pyvariant.is_scalar(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a scalar value and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_scalar
variant_a = VariantD(1.0)
variant_b = VariantD(True)
print(is_scalar(variant_a), is_scalar(variant_b))
# True False
```

<a id="pyvariant.is_signal"></a>

## pyvariant.is_signal(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a signal and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_signal, list_list_2_variant_signal
variant_a = VariantD(1.0)
x_axis = [1.0, 2.0, 3.0]
y_axes = [[0.1, 0.2, 0.3], [1.3, 1.2, 1.1]]
variant_b = list_list_2_variant_signal(y_axes, x_axis)
print(is_signal(variant_a), is_signal(variant_b))
# False True
```

<a id="pyvariant.is_uninitialized"></a>

## pyvariant.is_uninitialized(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a uninitialized and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_uninitialized
variant_a = VariantD(1.0)
variant_b = VariantD()
print(is_uninitialized(variant_a), is_uninitialized(variant_b))
# False True
```

<a id="pyvariant.is_vector"></a>

## pyvariant.is_vector(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a vector and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_vector, list_2_variant_vector
variant_a = VariantD(1.0)
variant_b = list_2_variant_vector([1.0, 2.0, 3.0])
print(is_vector(variant_a), is_vector(variant_b))
# False True
```

<a id="pyvariant.is_xy_data"></a>

## pyvariant.is_xy_data(item: [VariantD](#pyvariant.VariantD)) → bool

Return ‘True’ if ‘item’ is a xy-data and ‘False’ otherwise.

```python
from pyvariant import VariantD, is_xy_data, list_2_variant_xy_data
variant_a = VariantD(1.0)
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant_b = list_2_variant_xy_data(y_axis, x_axis)
print(is_xy_data(variant_a), is_xy_data(variant_b))
# False True
```

<a id="pyvariant.list_2_variant_vector"></a>

## pyvariant.list_2_variant_vector(values: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of values into VariantD vector type.

```python
from pyvariant import list_2_variant_vector
values = [1.0, 2.0, 3.0]
print(list_2_variant_vector(values))
# VECTOR [3]
# (1.0,0)
# (2.0,0)
# (3.0,0)
```

<a id="pyvariant.list_2_variant_xy_data"></a>

## pyvariant.list_2_variant_xy_data(y_axis: list, x_axis: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of x-values and a list of y-values into VariantD xy-data type.

```python
from pyvariant import list_2_variant_xy_data
x_axis = [1.0, 2.0, 3.0]
y_axis = [0.1, 0.2, 0.3]
print(list_2_variant_xy_data(y_axis, x_axis))
# XYDATA [3, 1]
# (1,0) - (0.1,0)
# (2,0) - (0.2,0)
# (3,0) - (0.3,0)
```

<a id="pyvariant.list_list_2_variant_matrix"></a>

## pyvariant.list_list_2_variant_matrix(values: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of lists of values into VariantD matrix type.

```python
from pyvariant import list_list_2_variant_matrix
values = [[1, 2], [3, 4], [5, 6]]
print(list_list_2_variant_matrix(values))
# MATRIX [3, 2]
# (1,0) (2,0)
# (3,0) (4,0)
# (5,0) (6,0)
```

<a id="pyvariant.list_list_2_variant_signal"></a>

## pyvariant.list_list_2_variant_signal(y_axes: list, x_axis: list) → [VariantD](#pyvariant.VariantD)

Convert a python list of x-values and a list of lists of y-values into VariantD signal type.

```python
from pyvariant import list_list_2_variant_signal
x_axis = [1.0, 2.0, 3.0]
y_axes = [[0.1, 0.2, 0.3], [1.3, 1.2, 1.1]]
print(list_list_2_variant_signal(y_axes, x_axis))
# SIGNAL [3, 2]
# (1,0) - (0.1,0) (1.3,0)
# (2,0) - (0.2,0) (1.2,0)
# (3,0) - (0.3,0) (1.1,0)
```

<a id="pyvariant.size1"></a>

## pyvariant.size1(item: [VariantD](#pyvariant.VariantD)) → int

Return the length of dimension 1.
If ‘item’ is a scalar, size1 is equal to ‘1’.
If ‘item’ is a vector, size1 returns the number of vector entries.
If ‘item’ is a matrix, size1 returns the number of matrix rows.
If ‘item’ is xy-data or a signal, size1 returns the number of y-axes.

```python
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size1 of variant is {}.'.format(variant.size1()))
# size1 of variant is 1.
```

<a id="pyvariant.size2"></a>

## pyvariant.size2(item: [VariantD](#pyvariant.VariantD)) → int

Return the length of dimension 2.
If ‘item’ is a scalar or vector, size2 is equal to ‘1’.
If ‘item’ is a matrix, size2 returns the number of matrix columns.
If ‘item’ is xydata or a signal, size2 returns the number of y-axis entries.

```python
from pyvariant import list_2_variant_xy_data
x_axis, y_axis = [1.0, 2.0, 3.0], [0.1, 0.2, 0.3]
variant = list_2_variant_xy_data(y_axis, x_axis)
print('size2 of variant is {}.'.format(variant.size2()))
# size2 of variant is 3.
```
