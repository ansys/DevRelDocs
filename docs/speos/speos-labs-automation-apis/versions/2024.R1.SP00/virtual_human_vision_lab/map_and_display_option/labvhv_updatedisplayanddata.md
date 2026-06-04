# UpdateDisplayAndData 

## Description 

Update all the display and the data of the Viewer. Returns 1 if no error has occurred, 0 otherwise.

## Syntax 

*object*.UpdateDisplayAndData\(\) As Short

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object


Some methods modify the display options \(for example ExtendedSetActiveConfig\). In order for the display to take these changes into account, calling the UpdateDisplayAndData method may be necessary.


