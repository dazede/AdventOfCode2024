def read_input(input):
    try:
        with open(input, 'r') as file:
            lines = file.readlines()
        return lines
    except FileNotFoundError:
        print("file error!")

