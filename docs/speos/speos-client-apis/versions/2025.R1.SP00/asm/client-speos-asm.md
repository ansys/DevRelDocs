# SpeosAsm

## CADUpdate

### Static method

Name | Description | Syntax
--- | --- | ---
Import | Import an external CAD file (CATProduct, CATPart, prt...) under the target Part's Component. Use `null` value for the `targetPart` parameter to import in the active Part. | `bool Import(string externalCadFilePath, object targetPart)`
Import | Import an external CAD file (CATProduct, CATPart, prt...) under the target Part's Component. Use `null` value for the `targetPart` parameter to import in the active Part. | `bool Import(string externalCadFilePath, SpaceClaim.Api.V251.Part targetPart)`
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Part. | `IEnumerable<object> GetImportedPartsUnder(object targetPart)`
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Part. | `IEnumerable<SpaceClaim.Api.V251.Part> GetImportedPartsUnder(SpaceClaim.Api.V251.Part targetPart)`
GetImportedPartsUnder | Get all Parts that are associated to a CAD-Import process, starting from the given Component. | `IEnumerable<SpaceClaim.Api.V251.Part> GetImportedPartsUnder(SpaceClaim.Api.V251.Component component)`
GetLastImportedFilePath | Get the file path previously used to import the given Part. Returns 'null' if no CAD-Import information is found for this Part. | `string GetLastImportedFilePath(object targetPart)`
GetLastImportedFilePath | Get the file path previously used to import the given Part. Returns 'null' if no CAD-Import information is found for this Part. | `string GetLastImportedFilePath(SpaceClaim.Api.V251.Part targetPart)`
GetLastImportedFileDateTime | Get the last write DateTime of the imported file at the time when the part was imported or updated. Returns `DateTime.MinValue` if no CAD-Import information is found for this Part. | `System.DateTime GetLastImportedFileDateTime(object targetPart)`
GetLastImportedFileDateTime | Get the last write DateTime of the imported file at the time when the part was imported or updated. Returns `DateTime.MinValue` if no CAD-Import information is found for this Part. | `System.DateTime GetLastImportedFileDateTime(SpaceClaim.Api.V251.Part targetPart)`
Update | Update a Part resulting from a previous CAD-Import with the same file path. Returns 'true' if and only if the Part was updated. | `bool Update(object targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)`
Update | Update a Part resulting from a previous CAD-Import with the same file path. Returns 'true' if and only if the Part was updated. | `bool Update(SpaceClaim.Api.V251.Part targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)`
UpdateAll | Update all previously imported Parts from a given root Part. Returns 'true' if and only if at least one Part has been updated. | `bool UpdateAll(object targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)`
UpdateAll | Update all previously imported Parts from a given root Part. Returns 'true' if and only if at least one Part has been updated. | `bool UpdateAll(SpaceClaim.Api.V251.Part targetPart, bool skipPartsWithUnknownPath, bool skipUnmodifiedFiles)`
