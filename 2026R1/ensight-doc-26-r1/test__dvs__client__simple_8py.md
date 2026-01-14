# File test\_dvs\_client\_simple.py

<a id="test__dvs__client__simple_8py"></a>

![][Python]

## Namespaces

* [test\_dvs\_client\_simple](namespacetest__dvs__client__simple.md#namespacetest__dvs__client__simple)

## Source


```python




# @cond Suppress Doxygen Warnings

import dynamic_visualization_store as dvs
server_id = dvs.server_create(uri="grpc://127.0.0.1:50055")
session_id = dvs.connect(server_id=server_id, flags=dvs.FLAGS_DEDUP|dvs.FLAGS_BLOCK_FOR_SERVER, secret="")
dvs.begin_init(session_id, "Python API Test", 0,1,1)
parts = []
tags={"_DVS::PATHNAME": u"Top Group|Bottom \u00a5 Group"}
parts.append(dict(name=u"Point part", id=1, structured=0, chunking=0, tags=tags))
dvs.add_part_info(session_id, parts)
vars = []
vars.append(dict(name=u"Pressure", id=1, type=dvs.VARTYPE_SCALAR, location=dvs.LOCATION_NODE, unit=u"ML/TT", unit_label=u"Pa" ))
vars.append(dict(name=u"Velocity", id=2, type=dvs.VARTYPE_VECTOR, location=dvs.LOCATION_ELEMENT, unit=u"L/T", unit_label=u"" ))
dvs.add_var_info(session_id, vars)
dvs.set_unit_system(session_id, "SI")
dvs.end_init(session_id)
for i in range(5):
    dvs.begin_update(session_id, update_num=i, time=100.0+10.*i)
    dvs.update_nodes(session_id, 1, [0.1*i],[ 0.1*i], [0.1*i])
    dvs.update_elements(session_id, 1, dvs.ELEMTYPE_PNT, [0])
    dvs.update_var_node_scalar(session_id, 1, 1, [i*30.])
    dvs.update_var_element_vector(session_id, 2, 1, dvs.ELEMTYPE_PNT, [i*2., i*3., i*4.])
    dvs.end_update(session_id)

# @endcond End Suppress Doxygen Warnings
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)