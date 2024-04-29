import csv
import json

def capitalize_first_letters(animal_name):
  words = animal_name.split()  # Split the name into words
  capitalized_words = [word.capitalize() for word in words]  # Capitalize the first letters
  return ' '.join(capitalized_words)  # Join the words back

def csv_to_json_groups(csv_file, output_file):
    with open(csv_file, 'r') as f_in, open(output_file, 'w', encoding='utf-8') as f_out:
        reader = csv.reader(f_in)
        data = []
        group = None
        group_data = []

        for row in reader:
            if row[0].isupper():
                if group:
                    data.append({'name': group, 'animals': group_data})
                group = row[0]
                group_data = []
            else:
                group_data.append({'image': row[0], 'name': capitalize_first_letters(row[1])})

        if group:
            data.append({'group': group, 'items': group_data})

        json.dump(data, f_out, indent=4, ensure_ascii=False)

if __name__ == '__main__':
    csv_to_json_groups('poznavacka.csv', 'poznavacka.json')
