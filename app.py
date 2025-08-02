from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('inicio.html', title='Inicio')

@app.route('/conocenos')
def conocenos():
    return render_template('conocenos.html', title='Conocenos')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html', title='Servicios')

@app.route('/casos')
def casos():
    return render_template('casos.html', title='casos')

@app.route('/contacto')
def contacto():
    return render_template("contacto.html", title='Contactanos')


if __name__ == '__main__':
    app.run(debug=True)