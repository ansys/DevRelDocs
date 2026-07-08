# Notes about Python APIs reference documentation

Python interfaces to the System Coupling Participant Library follow the C++ interface
with only minor modifications. For this reason, Python interfaces are not documented separately,
and C++ interfaces are documented instead.
If you would like to learn the details of a particular Python interface,
find the analogous C++ interface and look up the documentation for that interface.

For example, suppose you encounter the following Python code snippet and would like
to read documentation about each of the API calls implemented here:

```python
import pyExt.SystemCouplingParticipant as sysc

...

region = sysc.Region("region", sysc.Surface)
variable = sysc.Variable("variable", sysc.Scalar, False, sysc.Node)
region.addInputVariable(variable)
```

The equivalent of the Python `sysc.Region` object in C++ is `sysc::Region`.
The equivalent of the Python `sysc.Variable` object in C++ is `sysc::Variable`.
The equivalent of the Python `sysc.Region.addInputVariable` function in C++ is `sysc::Region::addInputVariable`.

Furthermore, Python docstrings are also available.
For example, you can look up the documentation for each API call used in the above code snippet
as follows:

```python
help(sysc.Region)
help(sysc.Variable)
help(sysc.Region.addInputVariable)
```
