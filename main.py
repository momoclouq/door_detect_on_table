def flappybird():
    while True:
        bird2 = game.create_sprite(0, 2)
        basic.clear_screen()
        basic.pause(500)

def on_button_pressed_ab():
    basic.show_string("Ready!")
    basic.show_string("3")
    basic.pause(1000)
    basic.show_string("2")
    basic.pause(1000)
    basic.show_string("1")
    basic.pause(1000)
    basic.clear_screen()
    flappybird()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

End = False