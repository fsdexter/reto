FROM python:3

WORKDIR /app

ENV FLASK_APP=app.py

ENV FLASK_ENV=development

COPY . .

RUN pip install -r requirements.txt

CMD [ "python", "app.py" ]