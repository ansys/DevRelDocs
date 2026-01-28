# Consolidating Properties in Material Model Output

The Material Model Service can consolidate properties that share the same set of free parameters into a single property in the output. This is controlled by the `consolidatePropertiesThatHaveParameters` flag in the Material Model Definition.

## How Consolidation Works

When properties are consolidated:

- Properties with the same free parameters are combined into a single property
- All dependent columns from these properties appear together with shared free parameter columns
- Simple properties (those without free parameters) remain unchanged
- The consolidated property appears at the position of the first property that had free parameters
- The consolidation process preserves the order of free parameter values, merging rows with identical free parameter values

## Implicit Constraints and Consolidation

Properties often rely on parameters that aren't explicitly defined in the Material Model Definition. The service handles these as follows:

- **Implicit Constraints**: If an MI attribute used for a property has parameters not listed as free parameters or constraints in the model definition, the service uses their default values as implicit constraints.
- **Different Default Values**: Default values for MI parameters can vary between attributes, so different properties may have different implicit constraints for the same parameters.
- **During Consolidation**: The service maintains these different implicit constraints for each column when consolidating properties. When resampling (interpolating missing values) in a consolidated property, the service preserves the implicit constraints specific to each original column rather than applying a global set of constraints.
- **Output Representation**: Importantly, these implicit constraints are not included in the output for consolidated properties. Each column in the consolidated property maintains its original behavior regarding which implicit constraints were used, but these constraints are not explicitly listed in the output.

## Resampling in Consolidated Properties

When properties are consolidated, some rows may have missing values for certain columns. The Material Model Service will automatically resample these missing values through interpolation:

- The resampling process respects the original implicit constraints for each column
- For each column with missing values, the service uses its original functional datum and constraints to interpolate values
- This ensures that even in a consolidated view, each column's values remain consistent with the constraints that were used to generate its original data

This approach ensures that consolidated properties provide a unified view of related data while preserving the meaning and constraints of the original properties.