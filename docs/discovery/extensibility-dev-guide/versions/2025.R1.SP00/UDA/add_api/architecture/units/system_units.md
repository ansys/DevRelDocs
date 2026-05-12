# System units and user units

Internally Discovery works in SI units: meters, kilograms, and seconds. The API also works in SI units.

The user may be working in some other units, but internally the units are still SI units. Conversions are done when values are presented to the user, or input by the user.

The Window class provides conversions between system units \(SI units\) and user units.

