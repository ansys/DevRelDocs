# translate

<a id="compolyx.Rosette.translate"></a>

#### Rosette.translate(translation_x, translation_y, translation_z, translation_type)

Translate the rosette, either along its own axes or the global one depending on the type of translation.

### Parameters:
  translation_x(float): Translation along the X axis
  translation_y(float): Translation along the Y axis
  translation_z(float): Translation along the Z axis
  translation_type(_rosette.RosetteTranslationType): Type of the translation to apply
### Usage:
  rosette.translate(10.0, 4.0, 5.0, \_rosette.RosetteTranslationType.GLOBAL)
