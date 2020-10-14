peso = float(input("seu peso em kg:   "))
altura = float(input("Sua altura no formato (metro.centimetros):  "))

imc = peso / (altura*altura)
print('Seu IMC = {:.2f}'.format(imc))

print('com essa informação deixe de preguiça e busque no google seu estado')