# MSolverDB

Solver database. The database is both the input and the results file to the
solver. It can be used to solve outside the Mechanical session (for example,
for co-simulation purposes) or to restart from a previous run.

### Members

`SetFileName(FileName)`

Set the database file name.

`SetDirectoryName(DirectoryName)`

Set the database directory.

`ReadDatabase()`

Read the content of the database.

`WriteDatabase()`

Write the current database to a file.

`DeleteDatabase()`

Delete the database.

`CloseDatabase()`

Close the database file.

`OpenDatabase()`

Open the database file and reads the database content table.

`Dispose()`

Clear the content of the database and free memory used by the database.
