# ComponentOpticalDesignExchangeResultCollection

## Description

Represents the collection of results belonging to an Optical Design Exchange feature.  
/

## Member Summary

| Member | Type |
| --- | --- |
| [FindFromName](#findfromname) | public |
| [CreateResultBuilder](#createresultbuilder) | public |

## Public Member Functions

### FindFromName

`ComponentOpticalDesignExchangeResultFeature FindFromName(self, name)`

Finds the result feature from its name.

**Parameters**:

- `str name`: The feature name.

---

### CreateResultBuilder

`ComponentOpticalDesignExchangeResultBuilder CreateResultBuilder(self, featureToEdit)`

Creates a builder for an Optical Design Exchange Result.

**Parameters**:

- `Feature featureToEdit`: The feature to be edited.
