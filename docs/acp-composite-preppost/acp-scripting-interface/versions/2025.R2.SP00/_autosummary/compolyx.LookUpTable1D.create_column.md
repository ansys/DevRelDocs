# create_column

<a id="compolyx.LookUpTable1D.create_column"></a>

#### LookUpTable1D.create_column(name, type=None, values=None, dimension='dimensionless')

Create a new column.

* **Parameters:**
  - name: Name of column.
  - type: A string (`scalar`, `direction`) specifying the column type (the values will be initialized to NaN).
  - values: A numpy array with values (the type is determined from its shape).
