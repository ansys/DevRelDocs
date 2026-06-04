# CADUpdate – Updating a geometry

The following script sample shows you an example on how to update a geometry.

```ironpython
def checkImportedPart(importedPart):
print "File path: " + str(SpeosAsm.CADUpdate.GetLastImportedFilePath(importedPart))
print "Last update: " + str(SpeosAsm.CADUpdate.GetLastImportedFileDateTime(importedPart))

def updateImportedPart(importedPart):
lastUpdate = SpeosAsm.CADUpdate.GetLastImportedFileDateTime(importedPart)
bUpdate = SpeosAsm.CADUpdate.Update(importedPart, True, True)
print "Update did work (unmodified parts skipped)? " + str(bUpdate)

bUpdate = SpeosAsm.CADUpdate.Update(importedPart, True, False)
print "Update did work (unmodified parts not skipped)? " + str(bUpdate)

# Update
previousUpdate = lastUpdate
lastUpdate = SpeosAsm.CADUpdate.GetLastImportedFileDateTime(importedPart)
if lastUpdate != previousUpdate:
print "Last update: " + str(SpeosAsm.CADUpdate.GetLastImportedFileDateTime(importedPart))

# Update all imported files that have been imported
currentPart = GetRootPart()
importedParts = SpeosAsm.CADUpdate.GetImportedPartsUnder()

bUpdate = SpeosAsm.CADUpdate.UpdateAll(currentPart, True, True)
print "Update all parts did work (unmodified parts skipped)? " + str(bUpdate)

bUpdate = SpeosAsm.CADUpdate.UpdateAll(currentPart, True, False)
print "Update all parts did work (unmodified parts not skipped)? " + str(bUpdate)

for importedPart in importedParts:
checkImportedPart(importedPart)
updateImportedPart(importedPart)
```