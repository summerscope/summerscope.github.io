def ask_question(text, answers, answer_set, score):
  print(text)
  print(answers)
  x = input()
  if x.upper() in answer_set:
    print('You selected ' + x)
    return True 
  else:
    print('Sorry '+ x +' is not a valid answer, please try again')
    return False

def validate_answer(text, answers, answer_set, score):
  answered = False
  while not answered:
    answered = ask_question(text, answers, answer_set, score)

validate_answer('How large is the target cohort for your decision system? \nThe people your system makes decisions, predictions or classifications about.', 'A. 1-100 \nB. 101-1,000 \nC. 1,001 - 10,000', ['A', 'B', 'C'], 0)