import requests

url = 'http://127.0.0.1:5000/api/data/accounts'

payload = {
    'info': {
        'email': 'SOGA',
        'password': '1323'
    },
    'attach': {
        'email': 'Youssef',
    }
}

headers = {'Content-Type': 'application/json'}

response = requests.request('PUT', url, json=payload, headers=headers)

print(response.text)