# calculator
A functional hand-calculator built using Javascript. 

Bugs Fixed:
  1) Consecutive operations *without* pressing "equals" now evaluate properly. 
  2) It is now impossible to press multiple operation buttons consecutively. Example: 6 + + - 4
  3) Pressing the delete key after completing an operation (i.e. hitting "equals") no longer works. The delete key is only active when the last button pressed is a number. 
  4) If lastOperation is empty, then it was still possible to input an operation, which didn't make sense and could result in an NaN.
  5) Dividing by zero *should* return "ERROR" (which prevents all button presses until a clear), but was returning "NaN", which allowed button presses. This was broken by adding a rounding algorith to the result, which when trying to round "ERROR" would return "NaN". Now fixed. 

Features to Add: 
  1) Keyboard support!

Easter Eggs: 
What's 9 plus 10?
