A simple Node.js App that retrieves the current price of Bitcoin and prints the price in a custom message to the console.

The first function "printPrice" creates a message in a the constant "message" and prints in the the console. The message contains interpolated data from the argument passed in the function.

The second function gets the Bitcoin data from the URL using the .get method. the data is then store and the json parsed in the local variable "price".
The printPrice fuction is then called when the API call has ended and it is passed the price of Bitcoin in USD as the argument.

The custom message can be changed if needed by adjusting the currency value and changing the dot notation when the parsed data is passed to the printPrice function.
i.e for GBP the dot notation could be changed to "price.bpi.GBP.rate"



Sean Jones