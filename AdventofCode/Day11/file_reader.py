def read_input(file_name):
    try:
        with open(file_name, 'r') as file:
            lines = file.readlines()
        return lines
    except FileNotFoundError:
        print("file error!")

