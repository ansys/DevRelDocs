
# <kbd>class</kbd> `Submission`
Challenge submission dictionary schema type. 

This class is a `typing.TypedDict` class that specifies the schema all dictionary submissions should follow to be valid when submitted. All entries can be any order, except where explicitly stated. 



**Notes:**

> The submission should contain details of all the material *to be built* in the challenge. It should not contain any material that has already been constructed by the challenge, unless it is required in order to specify a new object. For example, the start and end nodes (numbered 1 and 2) should NOT be redefined in a submission, however they *can* be used to create beam elements in the `beams` property. All rocks follow similar logic. 
>

**Args:**
 
 - <b>`nodes`</b>:  list of node numbers 
 - <b>`beams`</b>:  list of beams represented by pairs of node numbers 
 - <b>`load_path`</b>:  list of continuous connected nodes, in order,  leading from 1 through to 2. 
 - <b>`cross_section`</b>:  list of BeamXn enum objects. This order corresponds  to the order of values in the `beams`. 
 - <b>`dimensions`</b>:  list of dimensions for each cross-section.  Corresponds to the order of values in the `beams`. 
 - <b>`materials`</b>:  list of materials for each beam, represented as integers.  Corresponds to the order of values in the `beams`. 



**Examples:**
 

The suggested design for example 1a is shown below. 

```
    {"nodes": [[3, -2, 1],
                [4, -1, 1],
                [5, 0, 1],
                [6, 1, 1],
                [7, 2, 1],
                [8, 0, 0],
                [9, 0, -1]],
               "beams": [[1, 3],
                [3, 4],
                [4, 5],
                [5, 6],
                [6, 7],
                [7, 2],
                [5, 8],
                [8, 9],
                [9, 59]],
               "load_path": [1, 3, 4, 5, 6, 7, 2],
               "cross_section": [2, 2, 2, 2, 2, 2, 2, 2, 2],
               "dimensions": [[0.025], [0.025], [0.025], [0.025],
                              [0.025], [0.025], [0.025], [0.025],
                              [0.025]],
               "materials": [1, 1, 1, 1, 1, 1, 3, 3, 3]}
``` 




