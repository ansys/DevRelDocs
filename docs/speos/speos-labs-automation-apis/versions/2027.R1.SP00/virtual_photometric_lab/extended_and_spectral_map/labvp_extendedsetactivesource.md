# ExtendedSetActiveSource

## Description

Sets the active source of an extended or a spectral map \(0 if the map is not an extended or a spectral map\).

## Syntax

*object*.ExtendedSetActiveSource\(int iSource\) As Short

- *object*: Virtual Photometric Lab or Virtual Human Vision Lab object

- *iSource*: index of the source to activate

    You can set the *iSource*behavior as follows: - **-1** to set all sources activated at 100% power ratio \(equivalent to the *All layers*mode in Virtual Photometric Lab\). - **-2** to activate all sources depending on their current power ratio \(equivalent to the *User defined* mode in Virtual Photometric Lab\).
