FROM python:3.10

# Устанавливаем зависимости
RUN apt-get update && apt-get install -y wait-for-it

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл зависимостей
COPY req.txt /app/

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r req.txt

# Копируем весь проект
COPY . /app/

# Указываем порт, который будет прослушиваться
EXPOSE 8000

# Запускаем wait-for-it и запускаем Django
CMD ["wait-for-it", "db:3306", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]
