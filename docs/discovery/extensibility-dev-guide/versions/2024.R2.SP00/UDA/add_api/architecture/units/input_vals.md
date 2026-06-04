# Inputting values

To parse a length string entered by the user, you can use `Window.Units.Length.TryParse`. As well as converting to system units, this method also handles expressions, and values with explicit units stated:

-   "\(1 + 2\) \* 3 ^ \(3/3 + 3\)" = 243
-   "1cm + 1 1/2 mm" = 0.0115

`Window.Units.Angle.TryParse` provides the same functionality for angles.

