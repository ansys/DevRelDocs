---
uid: Ans.DataProcessing.operators.result.mapdl
title: Ans.DataProcessing.operators.result.mapdl Namespace
---

# Ans.DataProcessing.operators.result.mapdl Namespace

## Classes

| Class | Description |
|-------|-------------|
| [global_to_nodal](Ans_DataProcessing_operators_result_mapdl_global_to_nodal.md) | Rotate results from global coordinate system to local coordinate system.   ///available inputs: fieldA (Field), fieldB (Field) |
| [pres_to_field](Ans_DataProcessing_operators_result_mapdl_pres_to_field.md) | Read the presol generated file from mapdl.   ///available inputs: filepath (string), columns_to_read (Int32) (optional) |
| [prns_to_field](Ans_DataProcessing_operators_result_mapdl_prns_to_field.md) | Read the presol of nodal field generated file from mapdl.   ///available inputs: filepath (string), columns_to_read (Int32, IList int, System.Collections.IEnumerable) (optional) |
| [run](Ans_DataProcessing_operators_result_mapdl_run.md) | Solve in mapdl a dat/inp file and returns a datasources with the rst file.   ///available inputs: mapdl_exe_path (string) (optional), working_dir (string) (optional), number_of_processes (Int32) (optional), number_of_threads (Int32) (optional), data_sources (DataSources), server_mode (bool) (optional) |
