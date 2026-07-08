# ContactOptions

The ContactOptions object allows you to customize the behaviour of a contact
server. ContactOptions uses a set of numerical values (real or integer) that
can be get or set. When used as a switch, 0 means off and 1 is on.

### Constants

None

### Members

`TimeOut`

Time in second (=30.0 by default)

`Verbose`

Enable verbose mode in contact.out file (=0, disabled by default)

`NumberOfThreads`

Number of parallel threads used for contact detection (=2 by default)

### Member functions

None

### Example

    cOpts=CS_ContactOptions()
    cOpts.Verbose=1
