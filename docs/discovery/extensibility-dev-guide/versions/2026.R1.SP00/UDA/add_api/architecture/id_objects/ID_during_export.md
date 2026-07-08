# Identifiers during export

When an ACIS or Parasolid file is written, either by the user or by calling `Part.Export`, *name* attributes are attached to face and edge entities in the file to indicate which design face or design edge master they came from. This is useful if the model is changed and then a new file is exported, since corresponding faces and edges will have the same *name* attributes.

-   An ACIS *name* attribute is a "named attribute" \(ATTRIB\_GEN\_NAME\) with the attribute name, "ATTRIB\_XACIS\_NAME".
-   A Parasolid *name* attribute is a system attribute with the name, "SDL/TYSA\_NAME".

Design face and design edge masters have an ExportIdentifier property, which returns a string containing the value of the name attribute that is written when the object is exported.

-   **[Identifying objects in ACIS and Parasolid files](./ID_objects.md)**  

-   **[Foreign identifiers during import and export](./foreign_ID.md)**  


