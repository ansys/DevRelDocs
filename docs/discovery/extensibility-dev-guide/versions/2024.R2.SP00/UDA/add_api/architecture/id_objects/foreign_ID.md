# Foreign identifiers during import and export

There may be a requirement to import a model from another system, modify it in Discovery, and then export it again, such that the other system can track the identity of faces and edges during this round trip.

When importing an ACIS or Parasolid file, if any body, face, or edge entities have *id* attributes, these are converted to Discovery text attributes on the resulting design body, design face, or design edge masters. These text attributes have the reserved name: `@id`.

-   An ACIS *id* attribute is a "named attribute" `\(ATTRIB\_GEN\_NAME\)` with the attribute name: `ATTRIB\_XACIS\_ID`.
-   A Parasolid *id* attribute has the name, `ATTRIB\_XPARASOLID\_ID`, and has an attribute definition, which is described in the documentation for the `Part.Export` method.

Attributes applied to doc object masters are propagated if the object is replaced. For example, if a design face has a text attribute, and this face is split during a modeling operation, the replacement design face fragments will also carry the same text attribute.

When exporting an ACIS or Parasolid file, if any design bodies, design faces, or design edges have text attributes with the name, `@id`, these are written as *id* attributes applied to resulting ACIS or Parasolid entities.

