# as_integer_ratio

<a id="ansys.meshing.prime.ShellBLOffsetType.as_integer_ratio"></a>

#### ShellBLOffsetType.as_integer_ratio(/)

Return a pair of integers, whose ratio is equal to the original int.

The ratio is in lowest terms and has a positive denominator.

```pycon
>>> (10).as_integer_ratio()
(10, 1)
>>> (-10).as_integer_ratio()
(-10, 1)
>>> (0).as_integer_ratio()
(0, 1)
```

<!-- !! processed by numpydoc !! -->
