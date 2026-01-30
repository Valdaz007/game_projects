import turtle

def square(t, len:int):
    t.begin_fill()
    for _ in range(4):
        t.forward(len)
        t.right(90)
    t.forward(len)
    t.end_fill()

def rank(t, x, y, c1, c2):
    t.setx(x)
    t.sety(y)

    t.pendown()

    for _ in range(4):
        t.color(c1)
        square(t, 75)
        t.color(c2)
        square(t, 75)

def main():
    turtle.setup(width=606, height=600)
    turtle.title('MiChessFEN-IMG')

    ttl = turtle.Turtle()
    ttl.hideturtle()
    ttl.pensize(0)
    ttl.penup()

    rank(ttl, -300, 300, '#D18B47', '#FFCE9E')

    turtle.done()

if __name__ == '__main__':
    main()