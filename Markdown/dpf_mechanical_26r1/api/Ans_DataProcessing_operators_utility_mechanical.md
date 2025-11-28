---
uid: Ans.DataProcessing.operators.utility.mechanical
title: Ans.DataProcessing.operators.utility.mechanical Namespace
---

# Ans.DataProcessing.operators.utility.mechanical Namespace

## Classes

| Class | Description |
|-------|-------------|
| [make_time_chunk_for_each](Ans_DataProcessing_operators_utility_mechanical_make_time_chunk_for_each.md) | make_time_chunk_for_each() |
| [make_time_freq_support_chunk_for_each](Ans_DataProcessing_operators_utility_mechanical_make_time_freq_support_chunk_for_each.md) | Splits a time freq support into chunks depending on evaluated result properties,mesh or field size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator   ///available inputs: target_time_freq_support (TimeFreqSupport), operator_to_iterate (Operator), pin_index (Int32), meshed_region (MeshedRegion, Field), chunk_config (DataTree), producer_op11 (Operator), producer_op12 (Operator), output_pin_of_producer_op12 (Int32), input_pin_of_consumer_op12 (Int32), consumer_op12 (Operator) |
