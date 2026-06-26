# Supported unit systems

When creating an Integration Service session, your plugin can specify the unit systems to use for display and data export.  

| Setting  | Effect  | Default if not specified  |
|---|---|---|
| `exportUnitSystem`  | Unit system for the data in the Material Model Output |  SI (Consistent) |
| `displayUnitSystem` | Display unit system for the Granta Material Picker | Metric  |

All databases hosted on **Granta MI Connected Materials** support the following unit systems.

> **Tip:** The setting value must match the unit system name as it appears in this list.

- Metric
- FPS (Consistent)
- IPS (Consistent)
- US Customary
- SI (Consistent)
- CGS (Consistent)
- UK Imperial
- mmNs (Consistent)
- mm-g-ms (Consistent)

The units included in each unit system are provided: [Valid_Units_Per_System](data/Valid_Units_Per_System.csv)

