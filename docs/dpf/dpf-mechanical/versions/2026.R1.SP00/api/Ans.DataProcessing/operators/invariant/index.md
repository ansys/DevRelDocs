---
uid: Ans.DataProcessing.operators.invariant
---

# Ans.DataProcessing.operators.invariant Namespace

## Classes

| Class | Description |
|-------|-------------|
| [convertnum_bcs_to_nod](Ans_DataProcessing_operators_invariant_convertnum_bcs_to_nod.md) | Converts a fields container from BCS to NOD ordering.   ///available inputs: fields_container (FieldsContainer), data_sources (DataSources) |
| [convertnum_nod_to_bcs](Ans_DataProcessing_operators_invariant_convertnum_nod_to_bcs.md) | Converts a fields container from NOD to BCS ordering.   ///available inputs: fields_container (FieldsContainer), data_sources (DataSources) |
| [convertnum_op](Ans_DataProcessing_operators_invariant_convertnum_op.md) | Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.   ///available inputs: input_ordering (Int32), output_ordering (Int32), fields_container (FieldsContainer), data_sources (DataSources) |
| [eigen_values](Ans_DataProcessing_operators_invariant_eigen_values.md) | Computes the element-wise Eigen values of a tensor field.   ///available inputs: field (Field, FieldsContainer) |
| [eigen_values_fc](Ans_DataProcessing_operators_invariant_eigen_values_fc.md) | Computes the element-wise Eigen values of all the tensor fields of a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [eigen_vectors](Ans_DataProcessing_operators_invariant_eigen_vectors.md) | Computes the element-wise Eigen vectors for each tensor in the field.   ///available inputs: field (FieldsContainer, Field) |
| [eigen_vectors_fc](Ans_DataProcessing_operators_invariant_eigen_vectors_fc.md) | Computes the element-wise Eigen vectors for each tensor in the fields of the field container.   ///available inputs: fields_container (FieldsContainer, Field) |
| [invariants](Ans_DataProcessing_operators_invariant_invariants.md) | Computes the element-wise invariants of a tensor field.   ///available inputs: field (Field) |
| [invariants_fc](Ans_DataProcessing_operators_invariant_invariants_fc.md) | Computes the element-wise invariants of all the tensor fields of a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [principal_invariants](Ans_DataProcessing_operators_invariant_principal_invariants.md) | Computes the element-wise Eigen values of a tensor field.   ///available inputs: field (Field) |
| [principal_invariants_fc](Ans_DataProcessing_operators_invariant_principal_invariants_fc.md) | Computes the element-wise Eigen values of all the tensor fields of a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [segalman_von_mises_eqv](Ans_DataProcessing_operators_invariant_segalman_von_mises_eqv.md) | Computes the element-wise Segalman Von-Mises criteria on a tensor field.   ///available inputs: field (Field, FieldsContainer) |
| [segalman_von_mises_eqv_fc](Ans_DataProcessing_operators_invariant_segalman_von_mises_eqv_fc.md) | Computes the element-wise Segalman Von-Mises criteria on all the tensor fields of a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [von_mises_eqv](Ans_DataProcessing_operators_invariant_von_mises_eqv.md) | Computes the element-wise Von-Mises criteria on a tensor field.   ///available inputs: field (Field, FieldsContainer), poisson_ratio (double, Int32) |
| [von_mises_eqv_fc](Ans_DataProcessing_operators_invariant_von_mises_eqv_fc.md) | Computes the element-wise Von-Mises criteria on all the tensor fields of a fields container.   ///available inputs: fields_container (FieldsContainer), poisson_ratio (double, Int32) |
