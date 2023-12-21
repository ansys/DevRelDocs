# HUDOD – Getting/Setting Advanced Parameters to Improve HUD System

This page presents you an example on how to get/set HUD Optical Design Advanced Parameters to optimize, correct or adjust the HUD system.

**AdvancedParameters** allows you to get/set the following dynamics parameters: PGU Usage, Curvature Balance, Mirror Size Ratio, Stopping Criterion.

```
hod = SpeosDes.HUDOD.Find("HUD Optical Design.1")
hod.AdvancedParameters['Mirror size ratio'] = 1.4
print hod.AdvancedParameters['Curvature Balance']
for key in hod.AdvancedParameters:
    print key
```