from turtle import *
color('blue', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    if abs(pos()) < 1:
        break
forward(200)
left(90) 
forward(200) 
left(90)  
forward(200)  
left(90)  
forward(200) 

end_fill()
done()