# clear_generated_data

<a id="compolyx.DB.clear_generated_data"></a>

#### DB.clear_generated_data(model=None)

Function clears the eventually stored update results and deletes the generated data such as
Production and analysis plies, solid models, etc.
The passed `model` is invalidated. Continuing to use it will cause errors.
Use the returned Model instance instead. Example code:

`model = db.clear_generated_data(model)`

### Parameters:
  -model: The ACP model to be cleared.
### Returns:
  the updated model after clearing the generated data.
