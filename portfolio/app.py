from flask import Flask,render_template


app = Flask(__name__)


@app.route('/')
def home():

    return render_template('pages/home.html')

@app.route('/about')
def about():

    return render_template('pages/about.html')
    
@app.route('/cv')
def cv():
    # retourne un template page html
    return render_template('pages/cv.html')



""" gestion d'erreur 404 """
@app.errorhandler(404)
def page_not_found(error):

    return render_template('errors/404.html'), 404

if __name__ == '__main__':
    app.run(debug = True,host = '0.0.0.0',port = '5000')
