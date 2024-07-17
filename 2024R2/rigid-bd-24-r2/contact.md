# Contact

A Contact corresponds to a contact pair between two bodies.

Corresponding ID table: `CS_Contact`

**Note**
If multiple contact objects have been defined between the same two bodies
(with different surfaces), the solver merges them into one single pair. In
that case, only one of the contact pairs exists and the call to
`CS_Contact.Find(_cid)` will fail for all contact objects other than the one
that was used to handle the pair of bodies.  
  
### Constants

None

### Members

None

### Member functions

`GetOutputContactForce()`

Retrieves a measure that contains the total contact force between the two
linked bodies.
