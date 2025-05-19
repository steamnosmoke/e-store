from faker import Faker
import json
import random
import re

def normalize_phone(phone):
    """Приводит телефон к формату +X (XXX) XXX-XXXX"""
    # Удаляем все нецифровые символы
    digits = re.sub(r'[^\d+]', '', phone)
    
    # Обрабатываем международные номера
    if digits.startswith('+'):
        country_code = digits[:2]
        rest = digits[2:]
    else:
        country_code = '+1'  # По умолчанию для US
        rest = digits.lstrip('1')
    
    # Форматируем оставшуюся часть
    if len(rest) >= 10:
        formatted = f"{country_code} ({rest[:3]}) {rest[3:6]}-{rest[6:10]}"
        
        return formatted
    return phone  # Возвращаем как есть, если не удалось нормализовать

def transform_users_data(input_file, output_file):
    fake = Faker()
    
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    if 'users' not in data:
        raise ValueError("Input file doesn't contain users array")
    
    for user in data['users']:
        # Удаляем ненужные поля
        user.pop('avatar', None)
        
        # Обрабатываем телефон
        if 'address' in user and 'phone' in user['address']:
            user['phone'] = normalize_phone(user['address']['phone'])
            del user['address']['phone']
        else:
            # Генерируем новый телефон, если нет исходного
            user['phone'] = normalize_phone(fake.phone_number())
        
        # Преобразуем address в addresses
        if 'address' in user:
            num_addresses = random.randint(1, 3)
            addresses = []
            
            # Первый адрес
            first_address = user['address']
            first_address.pop('fullName', None)
            first_address['isDefault'] = True
            addresses.append(first_address)
            
            # Дополнительные адреса
            for _ in range(num_addresses - 1):
                addresses.append({
                    "street": fake.street_address(),
                    "city": fake.city(),
                    "zip": fake.zipcode(),
                    "country": fake.country(),
                    "isDefault": False
                })
            
            user['addresses'] = addresses
            del user['address']
    
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    transform_users_data('updated_data.json', 'output.json')