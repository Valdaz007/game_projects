import turtle

def square(t, len:int):
    t.color('red')
    t.begin_fill()
    for _ in range(4):
        t.forward(len)
        t.right(90)
    t.end_fill()

def main():
    turtle.setup(width=606, height=600)
    turtle.title('MiChessFEN-IMG')

    ttl = turtle.Turtle()
    square(ttl, 100)

    turtle.done()

if __name__ == '__main__':
    main()