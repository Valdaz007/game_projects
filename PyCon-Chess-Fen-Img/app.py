import turtle

def square(t, len:int):
    t.begin_fill()
    for _ in range(4):
        t.forward(len)
        t.right(90)
    t.forward(len)
    t.end_fill()

def rank(t, x, y, c1='#D18B47', c2='#FFCE9E'):
    t.setx(x)
    t.sety(y)

    t.pendown()

    for _ in range(4):
        t.color(c1)
        square(t, 75)
        t.color(c2)
        square(t, 75)

def board(t, x, y):
    for _ in range(4):
        rank(t, x, y)
        y-=75
        rank(t, x, y, '#FFCE9E', '#D18B47')
        y-=75

def main():
    turtle.setup(width=606, height=600)
    turtle.title('MiChessFEN-IMG')

    ttl = turtle.Turtle()
    ttl.hideturtle()
    ttl.speed(10)
    ttl.pensize(0)
    ttl.penup()

    # rank(ttl, -300, 300)
    board(ttl, -300, 300)

    turtle.done()

if __name__ == '__main__':
    main()