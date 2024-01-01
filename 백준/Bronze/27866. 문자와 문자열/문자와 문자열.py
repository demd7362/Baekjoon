import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

word, index = list(map(lambda x: x.strip(), sys.stdin.readlines()))

index = int(index)

print(word[index - 1])
