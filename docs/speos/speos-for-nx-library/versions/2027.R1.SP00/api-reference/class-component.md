# Component

## Description

Represents a Speos For NX component.  
/

## Member Summary

| Member | Type |
| --- | --- |
| [FindOccurrence](#findoccurrence) | public |
| [FindOccurrenceFromName](#findoccurrencefromname) | public |
| [FindComponentFromName](#findcomponentfromname) | public |

## Public Member Functions

### FindOccurrence

`Feature FindOccurrence(self, feature)`

Returns the feature occurrence corresponding to the given feature in the context of this component.

**Parameters**:

- `Feature feature`

---

### FindOccurrenceFromName

`Feature FindOccurrenceFromName(self, featureFullName)`

Returns the feature occurrence corresponding to the given feature full name in the context of this component.

**Parameters**:

- `str featureFullName`

---

### FindComponentFromName

`Component FindComponentFromName(self, identifiers)`

Returns the component corresponding to the given identifiers in the context of this component.

**Parameters**:

- `str identifiers`
