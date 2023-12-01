# Layouts

This notebook shows how to access layouts through the Streamlined API.

## Connect to Granta MI


```python
from GRANTA_MIScriptingToolkit import granta as mpy
mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
```

## Access a layout and inspect its properties

The `Table.layouts` property contains a **dict** of all layouts in the table, indexed by the layout name.


```python
tab = db.get_table('MaterialUniverse')
tab.layouts
```




    {'Polymers': <TableLayout: Polymers; categories: 24>,
     'Metals': <TableLayout: Metals; categories: 19>,
     'Aerospace materials': <TableLayout: Aerospace materials; categories: 18>,
     'Ceramics': <TableLayout: Ceramics; categories: 19>,
     'All bulk materials': <TableLayout: All bulk materials; categories: 20>,
     'All Attributes': <TableLayout: All Attributes; categories: 30>,
     'Explore list layout Materials': <TableLayout: Explore list layout Materials; categories: 1>,
     'Explore list layout Polymers': <TableLayout: Explore list layout Polymers; categories: 2>}



Select a particular **Layout** object and view the categories and attributes within the layout.


```python
polymers_layout = tab.layouts['Polymers']
polymers_layout.categories
```




    ['General properties',
     'Composition overview',
     'Composition detail (polymers and natural materials)',
     'Restricted substances',
     'Bio-data',
     'Foam properties',
     'Mechanical properties',
     'Impact properties',
     'Thermal properties',
     'Processing properties',
     'Electrical properties',
     'Optical properties',
     'Absorption, permeability',
     'Durability: flammability',
     'Durability: fluids and sunlight',
     'Chemical resistance to specific chemicals',
     'Geo-economic data for principal component',
     'Primary material production: energy, CO2 and water',
     'Eco-indicators for principal component',
     'Material processing: energy',
     'Material processing: CO2 footprint',
     'Material recycling: energy, CO2 and recycle fraction',
     'Notes',
     'Further Information']



The `attributes_by_category` property contains a **dict** of attributes indexed by their category.


```python
polymers_layout.attributes_by_category
```




    {'General properties': ['Designation',
      'Tradenames',
      'Density',
      'Price',
      'Material form'],
     'Composition overview': ['Composition (summary)',
      'Polymer class',
      'Polymer type',
      'Polymer type full name',
      '% filler (by weight)',
      'Filler type',
      'Additive'],
     'Composition detail (polymers and natural materials)': ['Polymer',
      'Flame retardant additive',
      'Impact modifier',
      'Plasticizer/oil',
      'MoS2 (molybdenum disulfide)',
      'PTFE (lubricant)',
      'Silicone (lubricant)',
      'Aluminum (flake)',
      'Aramid (fiber)',
      'BaSO4 (barium sulfate)',
      'Carbon (fiber)',
      'Carbon (powder)',
      'Glass (fiber)',
      'Glass (mat/fabric)',
      'Glass (other)',
      'Graphite (powder)',
      'Mica',
      'Mineral (unspecified)',
      'Rag/cotton/fabric',
      'Stainless steel (fiber)',
      'Talc',
      'Woodflour / cellulose'],
     'Restricted substances': ['Restricted substances associated with this material',
      'Restricted substances that may be associated with this material',
      'Restricted substances used in the manufacture of this material',
      'Restricted substances that may be used in the manufacture of this material',
      'Substance declaration available?'],
     'Bio-data': ['RoHS (EU) compliant grades?', 'Food contact'],
     'Foam properties': ['Anisotropy ratio', 'Cells/volume', 'Relative density'],
     'Mechanical properties': ["Young's modulus",
      'Compressive modulus',
      'Flexural modulus',
      'Shear modulus',
      "Poisson's ratio",
      'Shape factor',
      'Yield strength (elastic limit)',
      'Tensile stress at 100% strain',
      'Tensile stress at 300% strain',
      'Tensile strength',
      'Compressive strength',
      'Compressive stress @ 25% strain',
      'Compressive stress @ 50% strain',
      'Flexural strength (modulus of rupture)',
      'Shear strength',
      'Elongation at yield',
      'Elongation',
      'Hardness - Rockwell M',
      'Hardness - Rockwell R',
      'Hardness - Shore D',
      'Hardness - Shore A',
      'Fatigue strength at 10^7 cycles',
      'Fracture toughness',
      'Mechanical loss coefficient (tan delta)',
      'Densification strain',
      'Compression set at 23°C',
      'Compression set at 70°C',
      'Compression set at 100°C',
      'Tear strength'],
     'Impact properties': ['Impact strength, notched 23 °C',
      'Impact strength, notched -30 °C',
      'Impact strength, unnotched 23 °C',
      'Impact strength, unnotched -30 °C'],
     'Thermal properties': ['Melting point',
      'Glass temperature',
      'Heat deflection temperature 0.45MPa',
      'Heat deflection temperature 1.8MPa',
      'Maximum service temperature',
      'Minimum service temperature',
      'Thermal conductivity',
      'Specific heat capacity',
      'Thermal expansion coefficient',
      'Vicat softening point'],
     'Processing properties': ['Melt temperature',
      'Mold temperature',
      'Linear mold shrinkage',
      'Molding pressure range'],
     'Electrical properties': ['Electrical resistivity',
      'Dielectric constant (relative permittivity)',
      'Dissipation factor (dielectric loss tangent)',
      'Dielectric strength (dielectric breakdown)',
      'Comparative tracking index'],
     'Optical properties': ['Transparency', 'Refractive index'],
     'Absorption, permeability': ['Water absorption @ 24 hrs',
      'Water vapor transmission',
      'Permeability (O2)',
      'Permeability (CO2)',
      'Permeability (N2)'],
     'Durability: flammability': ['Flammability',
      'Flammability - typical UL 94 rating',
      'Oxygen index'],
     'Durability: fluids and sunlight': ['Chemical resistance, overview',
      'Chem. resistance index (0=worst, 1=best)',
      'Env. stress crack index (0=worst, 1=best)',
      'Water (fresh)',
      'Water (salt)',
      'Weak acids',
      'Strong acids',
      'Weak alkalis',
      'Strong alkalis',
      'Organic solvents',
      'Oils and fuels',
      'UV radiation (sunlight)',
      'ASTM D2000 heat resistance type',
      'ASTM D2000 oil resistance class'],
     'Chemical resistance to specific chemicals': [],
     'Geo-economic data for principal component': ['Principal component',
      'Reserves',
      'Main mining areas'],
     'Primary material production: energy, CO2 and water': ['Embodied energy, primary production',
      'CO2 footprint, primary production',
      'NOx creation',
      'SOx creation',
      'Water usage'],
     'Eco-indicators for principal component': ['Eco-indicator 95',
      'Eco-indicator 99',
      'EPS value'],
     'Material processing: energy': ['Polymer molding energy',
      'Polymer extrusion energy',
      'Autoclave molding energy',
      'Compression molding energy',
      'Filament winding energy',
      'Matched die (preform) molding energy',
      'Pultrusion energy',
      'Resin spray-up energy',
      'Resin transfer molding (RTM) energy',
      'Vacuum assisted resin infusion (VARI) energy',
      'Coarse machining energy (per unit wt removed)',
      'Fine machining energy (per unit wt removed)',
      'Grinding energy (per unit wt removed)',
      'Construction energy'],
     'Material processing: CO2 footprint': ['Polymer molding CO2',
      'Polymer extrusion CO2',
      'Autoclave molding CO2',
      'Compression molding CO2',
      'Filament winding CO2',
      'Matched die (preform) molding CO2',
      'Pultrusion CO2',
      'Resin spray-up CO2',
      'Resin transfer molding (RTM) CO2',
      'Vacuum assisted resin infusion (VARI) CO2',
      'Coarse machining CO2 (per unit wt removed)',
      'Fine machining CO2 (per unit wt removed)',
      'Grinding CO2 (per unit wt removed)',
      'Construction CO2'],
     'Material recycling: energy, CO2 and recycle fraction': ['Recycle',
      'Embodied energy, recycling',
      'CO2 footprint, recycling',
      'Recycle fraction in current supply',
      'Downcycle',
      'Combust for energy recovery',
      'Heat of combustion (net)',
      'Combustion CO2',
      'Landfill',
      'Biodegrade',
      'A renewable resource?',
      'Possible substitutes for principal component',
      'Recycle mark'],
     'Notes': ['Typical uses',
      'Other notes',
      'Process information',
      'Warning',
      'Reference sources'],
     'Further Information': []}


