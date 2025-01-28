
# <kbd>class</kbd> `BeamXn`
Beam cross-section enum. 

In PyMAPDL the beam cross-sections correspond to the following sectypes. 

* RECT = RECTANGLE = 1 

* HREC = RECTANGLETUBE = 4 

* CSOLID = CIRCLE = 2 

* CTUBE = CYLINDER = 3 

Dimensions structure for each cross-section shown below: 

RECTANGLE - [width, height] 

RECTANGLETUBE - [total_width, total_height,  left_wall_thickness, right_wall_thickness,  bottom_wall_thickness, top_wall_thickness] 

CIRCLE - [radius] 

CYLINDER - [inner_radius, outer_radius] 



**Examples:**
 ```python-repl
     >>> import ansys.codefest.mapdl as acf
     >>> acf.BeamXn.RECTANGLE
     <BeamXn.RECTANGLE: 1>
``` 




