import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

numbers = list(map(int, input().split(' ')))

sum = 0

for number in numbers:
    sum += pow(number, 2)

print(sum % 10)
