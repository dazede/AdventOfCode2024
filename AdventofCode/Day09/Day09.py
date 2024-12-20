from file_reader import read_input
data = read_input("Day09\input.txt")
data_arr = list(str(data[0]))
curr_ID = 0
id_array = []
new_array = []

for i in range(len(data_arr)):
    if (i % 2 == 0 or i == 0):
        id_array += [curr_ID] * int(data_arr[i])
        curr_ID += 1
    else:
        id_array += '.' * int(data_arr[i])

for i in range(len(id_array)):
    if id_array[i] != '.':
        new_array.append(id_array[i])
        id_array[i] = '.'
        continue
    for j in range(1, len(id_array)):
        if id_array[-j] != '.':
            new_array.append(id_array[-j])
            id_array[-j] = '.'
            break

ans = 0
for i in range(0, len(new_array)):
    ans += (i * int(new_array[i]))

print(ans)