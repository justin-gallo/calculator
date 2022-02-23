# calculator
A functional hand-calculator built using Javascript. 

Bugs Fixed:
  1) Consecutive operations *without* pressing "equals" now evaluate properly. 
  2) It is now impossible to press multiple operation buttons consecutively. Example: 6 + + - 4
  3) Pressing the delete key after completing an operation (i.e. hitting "equals") no longer works. The delete key is only active when the last button pressed is a number. 

Features to Add: 
  1) Keyboard support!

Bugs to squish:
  1) If lastOperation is empty, then it is still possible to input an operation, which doesn't make sense and can result in an NaN.
  2) Dividing by zero *should* return "ERROR" (which prevents all button presses until a clear), but currently returns "NaN", which allows button presses (which breaks everything).

Easter Eggs: 
What's 9 plus 10?
