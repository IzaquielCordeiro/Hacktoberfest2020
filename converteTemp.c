#include<stdio.h>
int main(){
    float far, cel;
    printf("Informe a temperatura em graus Fahrenheit \n");
    scanf("%f", &far);
    cel = (((far - 32)*5 ) / 9);

    printf("A temperatura em graus Celsius eh, %.2f\n",cel);

return 0;
}